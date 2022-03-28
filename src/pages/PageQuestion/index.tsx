import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Questions from "../../components/Questions";
import api from "../../services/api";

import { Container } from "./styles";

interface QuestionProps {
  pergunta: string;
  tipo: string;
  opcoes: [];
}

type Params = {
  id: string;
};

const limit = 6;

export default function PageQuestion() {
  const { id } = useParams<Params>();
  const [load, setLoad] = useState(true);
  const [data, setData] = useState<QuestionProps[]>([]);

  const [total, setTotal] = useState(0);
  const [pages, setPages] = useState([]);
  const [currentPage, setCurrentPage] = useState<any>(0);

  useEffect(() => {
    setLoad(true);
    getData()
  }, [currentPage]);

  async function getData()
  {

    const res = await api.get(`/pesquisa/${id}`)
    setData(res.data.result.perguntas[currentPage]);
    setTotal(res.data.result.perguntas.length);
    const totalPages = Math.ceil(total / limit);

    const arrayPages = [];
    for (let i = 0; i < totalPages; i++) {
      arrayPages.push(i);
    }
    setPages(arrayPages as any);
      setLoad(false);

    
  }
  return (
    <Container>
      <Questions 
        currentPage={currentPage}
        totalPages={total}
        setCurrentPage={(value) => setCurrentPage(value)} 
        data={data}
        getData={getData}
        load={load}
        isImage={false}
      />
    </Container>
  );
}
