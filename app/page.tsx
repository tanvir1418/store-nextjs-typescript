import { Fragment, Suspense } from "react";
import Hero from "@/components/home/Hero";
import FeaturedProducts from "@/components/home/FeaturedProducts";
import LoadingContainer from "@/components/global/LoadingContainer";

export default function HomePage() {
  return (
    <Fragment>
      <Hero />
      <Suspense fallback={<LoadingContainer />}>
        <FeaturedProducts />
      </Suspense>
    </Fragment>
  );
}
