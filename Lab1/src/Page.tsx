import { Card } from "react-bootstrap";

export function Page(){
    return(
        <>
            <div>
            <Card className="bg-dark text-white">
      <Card.Img src="image.png" alt="Card image" />
      <Card.ImgOverlay>
        <Card.Title>Card title</Card.Title>
        <Card.Text>
          Текст Текст Текст Текст Текст Текст Текст Текст Текст Текст Текст ТекстТекст Текст Текст Текст
          Текст Текст Текст Текст Текст Текст Текст Текст Текст Текст Текст ТекстТекст Текст Текст Текст
        </Card.Text>
        <Card.Text>Текст Текст Текст Текст Текст Текст</Card.Text>
      </Card.ImgOverlay>
    </Card>
            </div>
        </>
    );
}
