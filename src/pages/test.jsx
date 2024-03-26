
import Button from "@/components/Atoms/button/button";

const Test = () => {

  const handleClick = ()=>{
    alert('gd')
  }
  return (
    <>
      <Button name='테스트임' onClick={handleClick}/>;
      <div>x테스트1테스트2</div>
    </>
  );
};

export default Test;
