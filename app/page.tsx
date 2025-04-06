import {
  Avatar,
  Box,
  Button,
  Card,
  Container,
  Flex,
  Grid,
  Heading,
  Section,
  Text
} from "@radix-ui/themes";

export default async function Home() {
  return (
    <Box>
      {/* Hero Section */}
      <Section
        size="3"
        style={{
          background:
            "linear-gradient(to right, var(--indigo-3), var(--blue-3))",
          paddingTop: "80px",
          paddingBottom: "80px",
        }}
      >
        <Container size="3">
          <Flex direction="column" align="center" gap="5">
            <Heading size="9" align="center">
              Welcome to Our Platform
            </Heading>
            <Text size="4" align="center" style={{ maxWidth: "650px" }}>
              A simple, powerful solution for all your needs. Get started today
              and see how we can help you achieve your goals.
            </Text>
            <Flex gap="4" mt="5">
              <Button size="3">Get Started</Button>
              <Button size="3" variant="outline">
                Learn More
              </Button>
            </Flex>
          </Flex>
        </Container>
      </Section>

      {/* Features Section */}
      <Section id="features" size="3" style={{ padding: "80px 0" }}>
        <Container size="3">
          <Heading size="6" align="center" mb="6">
            Features
          </Heading>
          <Grid columns={{ initial: "1", sm: "2", md: "3" }} gap="4">
            {[1, 2, 3].map((i) => (
              <Card key={i} size="2">
                <Flex direction="column" gap="2">
                  <Avatar
                    fallback={`0${i}`}
                    color="indigo"
                    size="3"
                    radius="large"
                  />
                  <Heading size="4">Feature {i}</Heading>
                  <Text>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
                    do eiusmod tempor incididunt ut labore.
                  </Text>
                </Flex>
              </Card>
            ))}
          </Grid>
        </Container>
      </Section>

      {/* About Section */}
      <Section
        id="about"
        size="3"
        style={{
          background: "var(--gray-2)",
          padding: "80px 0",
        }}
      >
        <Container size="3">
          <Grid columns={{ initial: "1", md: "2" }} gap="6" align="center">
            <Box>
              <Heading size="6" mb="4">
                About Us
              </Heading>
              <Text mb="4">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris.
              </Text>
              <Text>
                Duis aute irure dolor in reprehenderit in voluptate velit esse
                cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
                cupidatat non proident.
              </Text>
            </Box>
            <Box
              style={{
                background: "var(--indigo-5)",
                height: "300px",
                borderRadius: "var(--radius-3)",
              }}
            />
          </Grid>
        </Container>
      </Section>

      {/* Contact Section */}
      <Section id="contact" size="3" style={{ padding: "80px 0" }}>
        <Container size="2">
          <Flex direction="column" align="center" gap="5">
            <Heading size="6" align="center">
              Contact Us
            </Heading>
            <Text align="center">
              Have questions? We&apos;re here to help. Reach out to our team.
            </Text>
            <Button size="3">Get in Touch</Button>
          </Flex>
        </Container>
      </Section>

      {/* Footer */}
      <Box
        style={{
          borderTop: "1px solid var(--gray-5)",
          padding: "32px 0",
        }}
      >
        <Container size="3">
          <Flex justify="between" align="center">
            <Flex align="center" gap="2">
              <Avatar fallback="LP" color="indigo" size="1" radius="full" />
              <Text size="1">Company Name © 2025</Text>
            </Flex>
            <Flex gap="4">
              <Text size="1">Privacy</Text>
              <Text size="1">Terms</Text>
              <Text size="1">Cookies</Text>
            </Flex>
          </Flex>
        </Container>
      </Box>
    </Box>
  );
}
