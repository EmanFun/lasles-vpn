import SectionTitle from "../atoms/SectionTitle";
import SectionSubtitle from "../atoms/SectionSubtitle";
import TestimonialsPagination from "../organisms/TestimonialsPagination";
import { useIntl } from "react-intl";

function TestimonialsSection() {
  const intl = useIntl();
  return (
    <div className="flex flex-col items-center justify-center mb-8 pb-8 ">
      <div className="flex justify-center flex-col text-center w-[500px]">
        <SectionTitle title={intl.formatMessage({id: "Testimonials.title"})} />
        <SectionSubtitle
          subTitle={intl.formatMessage({id: "Testimonials.textTitle"})}
        />
      </div>
      <TestimonialsPagination />
    </div>
  );
}

export default TestimonialsSection;
