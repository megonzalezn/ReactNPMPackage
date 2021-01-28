import * as React from 'react';
import { Button, Card, Label } from 'reactstrap';

export type IEdadGestacional = {
    origen?: string,
    log(mensaje: string): void
}

const EdadGestacional: React.FC<IEdadGestacional> = (props) => {
    const { origen, log } = props;
    // log('Invocado desde ' + origen);
    return (<React.Fragment>
        {console.log('render EG')}
        <Card variant="outlined">
            <Label variant="h4">
                Acá irá la Calculadora de Edad Gestacional
            </Label>
            <Button onClick={() => log('Invocado desde Edad Gestacional a ' + origen)} >Log</Button>
        </Card>
    </React.Fragment>
    )
}

export default EdadGestacional;