interface FooterProps {}

const Footer: React.FC<FooterProps> = ({}) => {
  return (
    <footer className="bg-wh-900 p-10 text-wh-50">
      <div className="mx-auto justify-between gap-16 sm:flex">
        {/* First section. */}
        <div className="mt-16 basis-1/2 sm:mt-0">
          <h4 className="font-bold">BLOG OF THE FUTURE</h4>
          <p className="my-5">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus,
            placeat suscipit dolorem, quod magnam omnis dicta nobis alias
            tenetur eveniet veniam nisi doloremque repudiandae ut labore aperiam
            excepturi ea consectetur?
          </p>
          <p>&copy; Blog of the Future. All Rights Reserved.</p>
        </div>
        {/* Second section. */}
        <div className="mt-16 basis-1/4 sm:mt-0">
          <h4 className="font-bold">Links</h4>
          <p className="my-5">Link of the future 1</p>
          <p className="my-5">Link of the future 2</p>
          <p className="my-5">Link of the future 3</p>
          <p className="my-5">Link of the future 4</p>
        </div>
        {/* Third section. */}
        <div className="mt-16 basis-1/4 sm:mt-0">
          <h4 className="font-bold">Contact us</h4>
          <p className="my-5">Address probably goes here.</p>
          <p className="my-5">(343) 786-6754</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
