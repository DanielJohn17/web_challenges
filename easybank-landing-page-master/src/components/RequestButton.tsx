type RequestButtonProps = {
  display: boolean;
};

const RequestButton = ({ display }: RequestButtonProps) => {
  return (
    <button
      className={`${
        display ? 'block' : 'hidden'
      } px-8 py-3 rounded-full font-semibold cursor-pointer
      text-custom-white gradient-to-right
      hover:opacity-60 transition-opacity duration-200`}
    >
      Request Invite
    </button>
  );
};

export default RequestButton;
