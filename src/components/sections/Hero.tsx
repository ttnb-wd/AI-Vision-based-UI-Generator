import { Sparkles } from "lucide-react";

import { Container } from "@/components/layout/Container";
import { Section } from "@/components/layout/Section";
import { FadeIn } from "@/components/animations/FadeIn";
import { Heading } from "@/components/shared/Heading";
import { Text } from "@/components/shared/Text";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

export function Hero() {
  return (
    <Section className="pt-10 lg:pt-20">
      <Container>
        <div className="grid items-center gap-12 lg:grid-cols-2">

          {/* Left Content */}
          <div>
            <FadeIn>
              <Badge
                variant="secondary"
                className="mb-6 gap-2 px-4 py-2"
              >
                <Sparkles size={16} />
                AI Powered UI Generation
              </Badge>
            </FadeIn>


            <FadeIn delay={0.1}>
              <Heading
                as="h1"
                className="
                  text-4xl
                  sm:text-5xl
                  lg:text-6xl
                "
              >
                Turn Screenshots Into Beautiful UI With AI
              </Heading>
            </FadeIn>


            <FadeIn delay={0.2}>
              <Text className="mt-6 max-w-xl">
                Upload any interface screenshot and let AI
                generate clean, production-ready UI code
                instantly.
              </Text>
            </FadeIn>


            <FadeIn delay={0.3}>
              <div className="mt-8 flex flex-wrap gap-4">
                <Button size="lg">
                  Generate UI
                </Button>

                <Button
                  size="lg"
                  variant="outline"
                >
                  View Demo
                </Button>
              </div>
            </FadeIn>

          </div>


          {/* Right Preview */}
          <FadeIn delay={0.2}>
            <div
              className="
                relative
                rounded-3xl
                border
                bg-white
                p-6
                shadow-lg
              "
            >
              <div className="
                aspect-video
                rounded-2xl
                bg-gradient-to-br
                from-blue-100
                via-purple-100
                to-pink-100
                flex
                items-center
                justify-center
              ">
                <span className="text-sm text-muted-foreground">
                  AI UI Preview
                </span>
              </div>
            </div>
          </FadeIn>

        </div>
      </Container>
    </Section>
  );
}