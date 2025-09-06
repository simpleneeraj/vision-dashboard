import { Button, CardBody, CardFooter, CardHeader, Input } from "@heroui/react"
import { AnimatePresence, motion } from "framer-motion"
import React from "react"
import { useForm } from "react-hook-form"

import BlurView from "~components/view/blur-view"
import useAppStore from "~store/slice/app"

enum OnboardingStep {
  INTRO = "intro",
  PROFILE = "profile"
}

const features = [
  "Beautiful curated backgrounds",
  "Customizable blur, depth & transparency",
  "Smooth transitions with minimal design",
  "Private & secure by default",
  "VisionOS-inspired glassmorphic UI",
  "Quick access to your favorite apps & tabs"
]

type ProfileForm = {
  name: string
  email: string
}

const Onboarding: React.FC = () => {
  const { updateState } = useAppStore()
  const [step, setStep] = React.useState<OnboardingStep>(OnboardingStep.INTRO)

  const {
    register,
    handleSubmit,
    formState: { errors, isValid }
  } = useForm<ProfileForm>({
    mode: "onChange",
    defaultValues: { name: "", email: "" }
  })

  const handleNext = () => {
    setStep((prev) =>
      prev === OnboardingStep.INTRO
        ? OnboardingStep.PROFILE
        : OnboardingStep.PROFILE
    )
  }

  const onSubmit = (data: ProfileForm) => {
    console.log("DD", data)
    updateState("onboarding.name", data.name)
    updateState("onboarding.email", data.email)
  }

  return (
    <motion.form key="profile-form" onSubmit={handleSubmit(onSubmit)}>
      <BlurView className="relative z-10 rounded-4xl p-6 w-96 flex flex-col items-center shadow-2xl">
        <CardHeader className="text-center flex-col pb-2">
          <motion.h2
            key={step}
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 10 }}
            transition={{ duration: 0.4 }}
            className="text-2xl font-semibold text-default-foreground">
            {step === OnboardingStep.INTRO ? "Welcome" : "Your Profile"}
          </motion.h2>
        </CardHeader>

        <CardBody className="text-center flex flex-col gap-4 w-full">
          <AnimatePresence mode="popLayout">
            {step === OnboardingStep.INTRO && (
              <motion.div
                key="intro"
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: "auto" }}
                exit={{ opacity: 0, height: 0 }}
                transition={{ duration: 0.5, ease: "easeOut" }}
                className="flex flex-col gap-4">
                <p className="text-base text-default-foreground/80 leading-relaxed">
                  Thanks for installing Vision Dashboard.
                </p>
                <ul className="flex flex-col gap-2 text-left">
                  {features.map((feature, i) => (
                    <motion.li
                      key={feature}
                      initial={{ opacity: 0, x: -10 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: i * 0.15, duration: 0.4 }}
                      className="text-sm text-default-foreground/60 flex items-center gap-2">
                      <span className="min-h-1.5 min-w-1.5 rounded-full bg-default-foreground/30" />
                      {feature}
                    </motion.li>
                  ))}
                </ul>
              </motion.div>
            )}

            {step === OnboardingStep.PROFILE && (
              <motion.div
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -8 }}
                transition={{ duration: 0.4 }}
                className="flex flex-col gap-3 w-full">
                <p className="text-base text-default-foreground/80 leading-relaxed">
                  Enter your name and email so we can personalize your
                  dashboard.
                </p>
                <Input
                  variant="bordered"
                  label="Name"
                  placeholder="Enter your name"
                  {...register("name", { required: "Name is required" })}
                  isInvalid={!!errors.name}
                  errorMessage={errors.name?.message}
                  classNames={{
                    input: "outline-none",
                    inputWrapper: "border-default-foreground/30"
                  }}
                />
                <Input
                  variant="bordered"
                  type="email"
                  label="Email"
                  placeholder="Enter your email"
                  {...register("email", {
                    required: "Email is required",
                    pattern: {
                      value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                      message: "Enter a valid email"
                    }
                  })}
                  isInvalid={!!errors.email}
                  errorMessage={errors.email?.message}
                  classNames={{
                    input: "outline-none",
                    inputWrapper: "border-default-foreground/30"
                  }}
                />
              </motion.div>
            )}
          </AnimatePresence>
        </CardBody>

        {step === OnboardingStep.INTRO && (
          <CardFooter className="flex items-center justify-center w-full mt-2">
            <Button
              fullWidth
              type="button"
              onPress={handleNext}
              className="flex items-center justify-center rounded-full bg-white/10 hover:bg-white/20 transition text-default-foreground/80 py-2 px-6 font-medium">
              Next
            </Button>
          </CardFooter>
        )}
        {step === OnboardingStep.PROFILE && (
          <CardFooter className="flex items-center justify-center w-full mt-2">
            <Button
              type="submit"
              fullWidth
              isDisabled={!isValid}
              className="flex items-center justify-center rounded-full bg-white/10 hover:bg-white/20 transition text-default-foreground/80 py-2 px-6 font-medium">
              Get Started
            </Button>
          </CardFooter>
        )}
      </BlurView>
    </motion.form>
  )
}

export default Onboarding
