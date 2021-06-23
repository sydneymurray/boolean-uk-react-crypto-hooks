import { CRIPTO_LIST } from "../constants";
import { useEffect, useState } from "react";

export default function useFetchCryptoList(){
  const [cryptoList, setCryptoList] = useState([]);
  useEffect(() => {
    fetch(CRIPTO_LIST)
      .then((resp) => resp.json())
      .then(setCryptoList);
  }, [setCryptoList]);
return [cryptoList, setCryptoList]
}