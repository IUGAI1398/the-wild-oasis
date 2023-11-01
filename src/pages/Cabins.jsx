import { useEffect, useState } from "react";
import Heading from "../ui/Heading";
import Row from "../ui/Row";
import Button from '../ui/Button'
import { getCabins } from "../services/apiCabins";
import CabinTable from "../features/cabins/CabinTable";
import CreateCabinForm from '../features/cabins/CreateCabinForm'

function Cabins() {


  useEffect(function () {
    getCabins().then((data) => {
      console.log(data);
    });
  }, [])

  const [showform, setShowform] = useState(false);

  

  return (
    <>
      <Row type="horizontal">
        <Heading as="h1">All cabins</Heading>
        <p>Filter / Sort</p>
      </Row>
      <Row>
        <CabinTable />
        <Button onClick={()=> setShowform((show) => !show) }>Add new cabin</Button>
        {showform && <CreateCabinForm/>}
      </Row>
    </>
  );
}

export default Cabins;
