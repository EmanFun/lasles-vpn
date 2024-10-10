import { useIntl } from "react-intl";

type Props = {
  price: number;
};

const Price = ({ price }: Props) => {
  const intl = useIntl();
  return (
    <p className="text-2xl font-medium m-4">
      {" "}
      {price === 0 ? (
        intl.formatMessage({ id: "Pricing.free" })
      ) : (
        <>
          <span className="text-2xl font-medium">${price}</span>/ mo
        </>
      )}
    </p>
  );
};

export default Price;
