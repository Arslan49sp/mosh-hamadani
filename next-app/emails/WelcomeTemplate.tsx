import {
  Html,
  Body,
  Container,
  Tailwind,
  Text,
  Link,
  Preview,
} from "@react-email/components";
const WelcomeTemplate = ({ name }: { name: string }) => {
  return (
    <Html>
      <Preview>Welcome Beero!</Preview>
      <Tailwind>
        <Body className="bg-white">
          <Container>
            <Text className="font-bold text-3xl">Hello</Text>
            <Link href="https://fixkar.services">fixkar.services</Link>
          </Container>
        </Body>
      </Tailwind>
    </Html>
  );
};

export default WelcomeTemplate;
