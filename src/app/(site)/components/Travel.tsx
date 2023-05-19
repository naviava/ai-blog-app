// Components.
import ArticleCard from "@/components/ArticleCard";

interface TravelProps {}

const Travel: React.FC<TravelProps> = ({}) => {
  return (
    <section className="mt-10">
      <hr className="border-1" />
      {/* Header */}
      <div className="my-8 flex items-center gap-3">
        <h4 className="bg-accent-green px-5 py-2 text-sm font-bold text-wh-900">
          TRAVEL
        </h4>
        <p className="text-2xl font-bold">New travel experiences</p>
      </div>
      {/* Article cards. */}
      <div className="justify-between gap-8 sm:flex">
        <ArticleCard className="mt-5 bg-wh-500 sm:mt-0" imageHeight="h-80" />
        <ArticleCard className="mt-5 bg-wh-500 sm:mt-0" imageHeight="h-80" />
        <ArticleCard className="mt-5 bg-wh-500 sm:mt-0" imageHeight="h-80" />
      </div>
      <ArticleCard
        className="mb-5 mt-7 flex items-center justify-between gap-3 bg-wh-500"
        imageHeight="h-80"
      />
    </section>
  );
};

export default Travel;
