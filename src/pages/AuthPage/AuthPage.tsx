import { Container, Flex } from "@mantine/core";

import { AuthenticationForm } from "@/conponents/common/Authentication/Authentication/AuthenticationForm";
import { BreadcrumbsComponent } from "@/features/Breadcrumbs/Breadcrumbs";
import { LoginLayout } from "@/shared/components/LoginLayout/LoginLayout";

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
