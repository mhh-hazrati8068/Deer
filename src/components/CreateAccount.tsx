import prime from "../assets/images/logo.png";
import Button from "./ui/buttons/Buttons";
const CreateAccount = () => {
  return (
    <div className="flex flex-col justify-center items-center">
      <img src={prime} className="w-50 m-4" />
      <div className="p-6 border border-gray-300 rounded-lg">
        <h1 className="text-2xl font-medium">Create Account</h1>
        <label className="font-semibold">Your Name</label>
        <input
          type="text"
          className="bg-gray-50 mt-4 border border-gray-300 text-gray-900 text-sm rounded-sm focus:ring-blue-500 focus:border-blue-500 block w-80 p-2.5"
          required
        />
        <label className="font-semibold">Mobile number or email</label>
        <input
          type="text"
          className="bg-gray-50 mt-4 border border-gray-300 text-gray-900 text-sm rounded-sm focus:ring-blue-500 focus:border-blue-500 block w-80 p-2.5"
          required
        />
        <label className="font-semibold">Password</label>
        <input
          type="text"
          className="bg-gray-50 mt-4 border border-gray-300 text-gray-900 text-sm rounded-sm focus:ring-blue-500 focus:border-blue-500 block w-80 p-2.5"
          required
          placeholder="At least 6 characters"
        />
        <h1 className="text-gray-500 text-sm mt-1 mb-2">
          * Passwords must be at least 6 characters.
        </h1>

        <label className="font-semibold">Re-enter password</label>
        <input
          type="text"
          className="bg-gray-50 mt-4 border border-gray-300 text-gray-900 text-sm rounded-sm focus:ring-blue-500 focus:border-blue-500 block w-80 p-2.5"
          required
        />
        <Button
          variant="primary"
          onClick={() => alert("Primary button clicked!")}
          width=""
          height=""
          color=""
          backgroundColor=""
          className="shadow-lg"
        >
          Continue
        </Button>

        <h1 className="text-sm mt-4 w-80">
          some random text for testing the app and developing the app in a{" "}
          <br />
          correct way
        </h1>
        <h1 className="mt-4 border-b-[1px] border-gray-400 pb-4">
          - Need help?
        </h1>
        <div className="mt-4 border-b-[1px] border-gray-400 pb-4">
          <h1 className="font-semibold ">Buying for work?</h1>
          <p className="text-sm text-blue-500">
            Create a free business account
          </p>
        </div>
        <div className="mt-4">
          <h1 className="text-sm ">
            Already have an account?{" "}
            <span className="text-sm text-blue-500">Sign in</span>
          </h1>
        </div>
      </div>
    </div>
  );
};

export default CreateAccount;
