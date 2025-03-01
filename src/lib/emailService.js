// utils/emailService.js
import emailjs from "@emailjs/browser";

// Function to send an email
export const sendEmail = async (form) => {
  try {
    const result = await emailjs.sendForm(
      "service_tl2tgin",
      "template_gigjqmh",
      form,
      "BOsI5N1534ojq81UO"
    );
    console.log("Email sent successfully!", result.text);
    return { success: true, message: "Message sent successfully!" };
  } catch (error) {
    console.error("Failed to send email:", error.text);
    return {
      success: false,
      message: "Failed to send message. Please try again.",
    };
  }
};
