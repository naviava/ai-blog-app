interface SubscribeProps {}

const Subscribe: React.FC<SubscribeProps> = ({}) => {
  return (
    <div className="bg-wh-10 px-5 py-10 text-center">
      <h4 className="text-base font-semibold">Subscribe</h4>
      <p className="mx-auto my-3 w-5/6 text-wh-500">
        Enter email address to receive top news and great deals!
      </p>
      <input
        className="w-5/6 min-w-[100px] border-2 px-5 py-2 text-center"
        placeholder="Enter email address"
      />
      <button className="mt-3 w-5/6 min-w-[100px] bg-accent-red px-5 py-2 font-semibold text-wh-10">
        SUBSCIBE
      </button>
    </div>
  );
};

export default Subscribe;
