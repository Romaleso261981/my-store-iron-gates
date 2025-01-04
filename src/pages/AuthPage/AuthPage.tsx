import { Container, Flex } from "@mantine/core";

import { AuthenticationForm } from "@/conponents/common/Authentication/Authentication/AuthenticationForm";
import { LoginLayout } from "@/conponents/layouts/LoginLayout/LoginLayout";
import { BreadcrumbsComponent } from "@/features/Breadcrumbs/Breadcrumbs";

export default function AuthPage() {
  return (
    <LoginLayout>
      <Flex ml={40}>
        <BreadcrumbsComponent
          items={[
            { title: "Home", href: "/" },
            { title: "Login", href: "/login" }
          ]}
        />
      </Flex>
      <Container>
        <AuthenticationForm />
      </Container>
    </LoginLayout>
  );
}
