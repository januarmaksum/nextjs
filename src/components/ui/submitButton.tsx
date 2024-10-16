import * as React from "react";

interface SubmitButtonProps {
  isSubmitting: boolean;
  buttonText: string;
}

const SubmitButton: React.FC<SubmitButtonProps> = ({
  isSubmitting,
  buttonText,
}) => {
  return (
    <button
      type="submit"
      className={`w-full px-4 py-2 text-white bg-indigo-600 rounded-md hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 ${
        isSubmitting ? "cursor-not-allowed opacity-50" : ""
      }`}
      disabled={isSubmitting}
    >
      {isSubmitting ? "Submitting..." : buttonText}
    </button>
  );
};

export default SubmitButton;
