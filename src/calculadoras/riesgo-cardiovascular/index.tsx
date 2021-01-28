import { Button, Card, Label } from 'reactstrap';
import * as React from 'react';

export type IRiesgoCardiovascular = {
    origen?: string,
    log(mensaje: string): void
}

const RiesgoCardiovascular: React.FC<IRiesgoCardiovascular> = (props) => {
    const { origen, log } = props;
    // log('Invocado desde ' + origen);
    return (<React.Fragment>
          {console.log('render RC')}
        <Card variant="outlined">
            <Label  variant="h3">
                Acá irá la Calculadora de Riesgo Cardiovascular
            </Label>
            <Button onClick={() => log('Invocado desde Riesgo Cardiovascular a ' + origen)} >Log</Button>
        </Card>
    </React.Fragment>)
}

export default RiesgoCardiovascular;