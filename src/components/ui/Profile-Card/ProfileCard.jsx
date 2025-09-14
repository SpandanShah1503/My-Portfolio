// Import React and required hooks
import React, { useEffect, useRef, useCallback, useMemo } from "react";
import "./ProfileCard.css"; // Import CSS styles

/* 🔹 Animation-related constants */
const ANIMATION_CONFIG = {
  SMOOTH_DURATION: 600, // duration for smooth return animation
  INITIAL_DURATION: 1500, // duration for initial animation load
  INITIAL_X_OFFSET: 70, // initial X offset (for tilt start position)
  INITIAL_Y_OFFSET: 60, // initial Y offset
  DEVICE_BETA_OFFSET: 20, // offset correction for mobile tilt (device orientation)
};

/* 🔹 Helper functions for math and animations */
const clamp = (value, min = 0, max = 100) => Math.min(Math.max(value, min), max); 
// → Keeps value between min and max

const round = (value, precision = 3) => parseFloat(value.toFixed(precision)); 
// → Rounds numbers to given decimal places

const adjust = (value, fromMin, fromMax, toMin, toMax) =>
  // → Converts a value from one range into another range
  round(toMin + ((toMax - toMin) * (value - fromMin)) / (fromMax - fromMin));

const easeInOutCubic = (x) =>
  // → Easing function for smooth animation (used for tilt reset)
  x < 0.5 ? 4 * x * x * x : 1 - Math.pow(-2 * x + 2, 3) / 2;

/* 🔹 Profile Card Component */
const ProfileCardComponent = ({
  avatarUrl = "/avatar.png", // main avatar image
  iconUrl, // optional icon
  grainUrl, // optional grain texture
  showBehindGradient = false, // toggle gradient background
  className = "", // allow custom classNames
  enableTilt = true, // enable 3D tilt animation
  enableMobileTilt = false, // enable tilt on mobile gyroscope
  mobileTiltSensitivity = 5, // how sensitive mobile tilt is
  miniAvatarUrl, // smaller avatar inside card
  name = "Javi A. Torres", // user’s name
  title = "Software Engineer", // user’s title/job
  handle = "javicodes", // user’s handle (@username)
  status = "Online", // user’s status text
  contactText = "Contact", // button text
  showUserInfo = true, // toggle showing user info area
  onContactClick, // callback when contact button is clicked
}) => {
  const wrapRef = useRef(null); // wrapper div ref (outer)
  const cardRef = useRef(null); // card section ref (inner)

/* 🔹 Animation Handlers (computed once using useMemo) */
  const animationHandlers = useMemo(() => {
    if (!enableTilt) return null; // if tilt disabled, skip logic

    let rafId = null; // requestAnimationFrame ID for canceling

    // Function: update card tilt based on pointer/movement
    const updateCardTransform = (offsetX, offsetY, card, wrap) => {
      const width = card.clientWidth;
      const height = card.clientHeight;

      // Get pointer percentage inside card
      const percentX = clamp((100 / width) * offsetX);
      const percentY = clamp((100 / height) * offsetY);

      // Distance from card center
      const centerX = percentX - 50;
      const centerY = percentY - 50;

      // CSS custom properties applied for transform + background effect
      const properties = {
        "--pointer-x": `${percentX}%`, // pointer position X
        "--pointer-y": `${percentY}%`, // pointer position Y
        "--background-x": `${adjust(percentX, 0, 100, 35, 65)}%`, // bg shift X
        "--background-y": `${adjust(percentY, 0, 100, 35, 65)}%`, // bg shift Y
        "--pointer-from-center": `${clamp(
          Math.hypot(percentY - 50, percentX - 50) / 50, // distance from center
          0,
          1
        )}`,
        "--pointer-from-top": `${percentY / 100}`, // top ratio
        "--pointer-from-left": `${percentX / 100}`, // left ratio
        "--rotate-x": `${round(-(centerX / 5))}deg`, // rotation X
        "--rotate-y": `${round(centerY / 4)}deg`, // rotation Y
      };

      // Apply all CSS variables to wrapper
      Object.entries(properties).forEach(([property, value]) => {
        wrap.style.setProperty(property, value);
      });
    };

    // Function: smooth animation (when pointer leaves card)
    const createSmoothAnimation = (duration, startX, startY, card, wrap) => {
      const startTime = performance.now(); // start time of animation
      const targetX = wrap.clientWidth / 2; // center X
      const targetY = wrap.clientHeight / 2; // center Y

      const animationLoop = (currentTime) => {
        const elapsed = currentTime - startTime;
        const progress = clamp(elapsed / duration); // progress [0–1]
        const easedProgress = easeInOutCubic(progress); // smooth easing

        // Interpolate positions from start to center
        const currentX = adjust(easedProgress, 0, 1, startX, targetX);
        const currentY = adjust(easedProgress, 0, 1, startY, targetY);

        // Update transform
        updateCardTransform(currentX, currentY, card, wrap);

        if (progress < 1) {
          rafId = requestAnimationFrame(animationLoop); // keep animating
        }
      };

      rafId = requestAnimationFrame(animationLoop);
    };

    return {
      updateCardTransform, // update tilt
      createSmoothAnimation, // smooth reset
      cancelAnimation: () => {
        if (rafId) {
          cancelAnimationFrame(rafId); // cancel animation
          rafId = null;
        }
      },
    };
  }, [enableTilt]);

/* 🔹 Event Handlers for pointer/mouse */
  const handlePointerMove = useCallback(
    (event) => {
      const card = cardRef.current;
      const wrap = wrapRef.current;
      if (!card || !wrap || !animationHandlers) return;

      const rect = card.getBoundingClientRect(); // get card bounds
      animationHandlers.updateCardTransform(
        event.clientX - rect.left, // X inside card
        event.clientY - rect.top, // Y inside card
        card,
        wrap
      );
    },
    [animationHandlers]
  );

  const handlePointerEnter = useCallback(() => {
    const card = cardRef.current;
    const wrap = wrapRef.current;
    if (!card || !wrap || !animationHandlers) return;

    animationHandlers.cancelAnimation(); // stop ongoing anim
    wrap.classList.add("active"); // add active class
    card.classList.add("active");
  }, [animationHandlers]);

  const handlePointerLeave = useCallback(
    (event) => {
      const card = cardRef.current;
      const wrap = wrapRef.current;
      if (!card || !wrap || !animationHandlers) return;

      // Smoothly return to center when pointer leaves
      animationHandlers.createSmoothAnimation(
        ANIMATION_CONFIG.SMOOTH_DURATION,
        event.offsetX,
        event.offsetY,
        card,
        wrap
      );
      wrap.classList.remove("active");
      card.classList.remove("active");
    },
    [animationHandlers]
  );

/* 🔹 Mobile tilt using device orientation */
  const handleDeviceOrientation = useCallback(
    (event) => {
      const card = cardRef.current;
      const wrap = wrapRef.current;
      if (!card || !wrap || !animationHandlers) return;

      const { beta, gamma } = event; // phone tilt values
      if (!beta || !gamma) return;

      // Apply tilt based on phone rotation
      animationHandlers.updateCardTransform(
        card.clientHeight / 2 + gamma * mobileTiltSensitivity,
        card.clientWidth / 2 +
          (beta - ANIMATION_CONFIG.DEVICE_BETA_OFFSET) * mobileTiltSensitivity,
        card,
        wrap
      );
    },
    [animationHandlers, mobileTiltSensitivity]
  );

/* 🔹 Initial setup: add/remove listeners */
  useEffect(() => {
    if (!enableTilt || !animationHandlers) return;

    const card = cardRef.current;
    const wrap = wrapRef.current;
    if (!card || !wrap) return;

    // Add mouse listeners
    card.addEventListener("pointerenter", handlePointerEnter);
    card.addEventListener("pointermove", handlePointerMove);
    card.addEventListener("pointerleave", handlePointerLeave);

    // Start with small animation effect
    const initialX = 0;
    const initialY = 0;
    animationHandlers.updateCardTransform(initialX, initialY, card, wrap);
    animationHandlers.createSmoothAnimation(
      ANIMATION_CONFIG.INITIAL_DURATION,
      initialX,
      initialY,
      card,
      wrap
    );

    // Cleanup on unmount
    return () => {
      card.removeEventListener("pointerenter", handlePointerEnter);
      card.removeEventListener("pointermove", handlePointerMove);
      card.removeEventListener("pointerleave", handlePointerLeave);
      window.removeEventListener("deviceorientation", handleDeviceOrientation);
      animationHandlers.cancelAnimation();
    };
  }, [
    enableTilt,
    enableMobileTilt,
    animationHandlers,
    handlePointerMove,
    handlePointerEnter,
    handlePointerLeave,
    handleDeviceOrientation,
  ]);

/* 🔹 Inline style overrides (transparent setup) */
  const cardStyle = useMemo(
    () => ({
      "--icon": "none", // hide icon background
      "--grain": "none", // hide grain background
      "--behind-gradient": "none", // disable gradient behind
      "--inner-gradient": "transparent", // transparent inner gradient
    }),
    []
  );

/* 🔹 Contact button click handler */
  const handleContactClick = useCallback(() => {
    onContactClick?.();
  }, [onContactClick]);

/* 🔹 JSX Layout */
  return (
    <div
      ref={wrapRef}
      className={`pc-card-wrapper ${className}`.trim()}
      style={cardStyle} // inline CSS vars applied here
    >
      <section ref={cardRef} className="pc-card">
        <div className="pc-inside">
          {/* Avatar Section */}
          <div className="pc-content pc-avatar-content">
            <img
              className="avatar"
              src={avatarUrl}
              alt={`${name || "User"} avatar`}
              loading="lazy"
              onError={(e) => {
                e.target.style.display = "none"; // hide image if broken
              }}
            />

            {/* User info: handle, status, contact button */}
            {showUserInfo && (
              <div className="pc-user-info">
                <div className="pc-user-details">
                  {/* Mini avatar */}
                  <div className="pc-mini-avatar">
                    <img
                      src={miniAvatarUrl || avatarUrl}
                      alt={`${name || "User"} mini avatar`}
                      loading="lazy"
                      onError={(e) => {
                        e.target.style.opacity = "0.5"; // fade if error
                        e.target.src = avatarUrl; // fallback to main avatar
                      }}
                    />
                  </div>

                  {/* Handle + Status */}
                  <div className="pc-user-text">
                    <div className="pc-handle">@{handle}</div>
                    <div className="pc-status">{status}</div>
                  </div>
                </div>

                {/* Contact Button */}
                <button
                  className="pc-contact-btn"
                  onClick={handleContactClick}
                  style={{ pointerEvents: "auto" }}
                  type="button"
                  aria-label={`Contact ${name || "user"}`}
                >
                  {contactText}
                </button>
              </div>
            )}
          </div>

          {/* Name + Title */}
          <div className="pc-content">
            <div className="pc-details">
              <h3>{name}</h3>
              <p>{title}</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

/* Wrap component with React.memo for performance */
const ProfileCard = React.memo(ProfileCardComponent);
export default ProfileCard;
