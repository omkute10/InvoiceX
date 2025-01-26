import { z } from "zod";

export const onBoardingSchema = z.object({
  firstName: z.string().min(2, "First Name is Required"),
  lastName: z.string().min(2, "Last Name is Required"),
  address: z.string().min(2, "Address is Required"),
});
