import { Link } from "@nextui-org/link";
import { Button, Input } from "@nextui-org/react";
import { Image } from "@nextui-org/image";
import { siteConfig } from "@/config/site";
import DefaultLayout from "@/layouts/default";


export default function IndexPage() {
  return (
    <DefaultLayout>
      <section className="flex flex-col items-center justify-center gap-4 py-8 md:py-10">
        <div className="flex flex-col justify-center items-center py-4">
          <Image src="/logo.png" width={80} />
          <h2 className="text-2xl py-2 font-bold">
            Police Case Management System
          </h2>
        </div>
        <h1 className="lg:text-4xl">Login</h1>
        <form className="flex flex-col gap-8 lg:w-2/5 w-full p-8 rounded-lg">
          <Input label="Username" type="text" />
          <Input label="Password" type="password" />
          <Button
            fullWidth
            as={Link}
            color="primary"
            href={siteConfig.links.dashboard}
            radius="md"
            size="lg"
            variant="shadow"
          >
            Log In
          </Button>
        </form>
      </section>
    </DefaultLayout>
  );
}
