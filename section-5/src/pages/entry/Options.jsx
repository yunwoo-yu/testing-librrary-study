import { useEffect, useState } from "react";
import axios from "axios";
import ScoopOption from "./ScoopOption";
import Row from "react-bootstrap/Row";
import ToppingOption from "./ToppingOption";
import AlertBanner from "../common/AlertBanner";

const Options = ({ optionType }) => {
  const [items, setItems] = useState([]);
  const [error, setError] = useState(false);

  useEffect(() => {
    axios
      .get(`http://localhost:3030/${optionType}`)
      .then((res) => setItems(res.data))
      .catch((error) => {
        setError(true);
      });
  }, [optionType]);

  if (error) {
    // @ts-ignore
    return <AlertBanner />;
  }

  // 토핑 옵션 생성 후 null 변경
  const ItemComponent = optionType === "scoops" ? ScoopOption : ToppingOption;

  const optionItems = items.map((item) => (
    <ItemComponent
      key={item.name}
      name={item.name}
      imagePath={item.imagePath}
    />
  ));

  return <Row>{optionItems}</Row>;
};

export default Options;
