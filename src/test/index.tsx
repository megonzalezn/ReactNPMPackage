import { Button, Card, Label } from 'reactstrap';
import * as React from 'react'
import './styles.scss'



export type ICounterProps = {
  mensaje?: string
  logSomething(props: any): void
}

const Test: React.FC<ICounterProps> = (props) => {
  const { mensaje, logSomething } = props
  // logSomething('Este mensaje es desde el Package, a través de un método en ' + mensaje);
  return (<React.Fragment>
      {console.log('render TEST')}
    <Card variant='outlined'>
      <Label variant="h5">
        El package fue invocado desde {mensaje}
      </Label>
      <Button onClick={() => logSomething('Este mensaje es desde el Package, a través de un método en ' + mensaje) } >Log</Button>
    </Card>
  </React.Fragment>)

}

export default Test;