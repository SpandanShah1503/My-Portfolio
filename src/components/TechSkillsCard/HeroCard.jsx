import { Card, CardHeader, CardBody, CardFooter, Divider, Link, Image } from "@heroui/react";

export default function HeroCard() {
  return (
    <Card className="max-w-[400px] border">
      <CardHeader className="place-content-start">
        <Image
          alt="heroui logo"
          height={40}
          radius="sm"
          src="https://avatars.githubusercontent.com/u/86160567?s=200&v=4"
          width={40}
        />
        <div className="flex flex-col">
          <p className="text-md">Web Application Firewall (WAF) Design</p>
          <p className="text-small text-default-500"></p>
        </div>
      </CardHeader>

      <Divider />

      <CardBody>
        <p></p>
      </CardBody>

      <Divider />

      <CardFooter>
        <Link
          isExternal
          showAnchorIcon
          href="https://github.com/heroui-inc/heroui"
        >
          Visit source code on GitHub.
        </Link>
      </CardFooter>
    </Card>
  );
}
