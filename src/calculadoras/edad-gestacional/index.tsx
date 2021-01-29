import * as React from 'react';
import { Button, ButtonToggle, Card, CardBody, CardFooter, CardHeader, Col, FormGroup, Input, Label } from 'reactstrap';

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
            <CardHeader>Cálculo de la Edad Gestacional</CardHeader>
            <CardBody>


                <FormGroup tag="fieldset">
                    <FormGroup check inline>
                        <Label check>
                            <Input type="radio" name="radio1" />{' '}
            Calcular por FUR
          </Label>
                    </FormGroup>
                    <FormGroup check inline>
                        <Label check>
                            <Input type="radio" name="radio1" />{' '}
            Calcular por Clínica
          </Label>
                    </FormGroup>
                    <FormGroup check inline>
                        <Label check>
                            <Input type="radio" name="radio1" />{' '}
            Calcular por Eco
          </Label>
                    </FormGroup>
                </FormGroup>

                <FormGroup row>
                    <Label for="exampleEmail" sm={6} xs={6}>Fecha Actual:</Label>
                    <Col sm={6}>
                        <Input type="text" name="email" id="exampleEmail" />
                    </Col>
                </FormGroup>
                <FormGroup row>
                    <Label for="exampleEmail" sm={6} xs={6}>Fecha Última Regla:</Label>
                    <Col sm={6}>
                        <Input type="date" name="date" id="exampleDate" />
                    </Col>
                </FormGroup>
                <FormGroup row>
                    <Label for="exampleEmail" sm={6} xs={6}>Fecha Estimada de Embarazo:</Label>
                    <Col sm={6}>
                        <Input type="text" name="email" id="exampleEmail" />
                    </Col>
                </FormGroup>
                <FormGroup row>
                    <Label for="exampleEmail" sm={6} xs={6}>Periodo de mayor riesgo para que el bebé nazca con algún defecto:</Label>
                    <Col sm={6}>
                        <Input type="text" name="email" id="exampleEmail" />
                    </Col>
                </FormGroup>
                <FormGroup row>
                    <Label for="exampleEmail" sm={6} xs={6}>Comienzo de la formación de órganos:</Label>
                    <Col sm={6}>
                        <Input type="text" name="email" id="exampleEmail" />
                    </Col>
                </FormGroup>
                <FormGroup row>
                    <Label for="exampleEmail" sm={6} xs={6}>Los principales órganos que se han formado:</Label>
                    <Col sm={6}>
                        <Input type="text" name="email" id="exampleEmail" />
                    </Col>
                </FormGroup>
                <FormGroup row>
                    <Label for="exampleEmail" sm={6} xs={6}>Fin del primer trimestre. Desciende el riesgo de aborto:</Label>
                    <Col sm={6}>
                        <Input type="text" name="email" id="exampleEmail" />
                    </Col>
                </FormGroup>
                <FormGroup row>
                    <Label for="exampleEmail" sm={6} xs={6}>Algunos prematuros sobreviven:</Label>
                    <Col sm={6}>
                        <Input type="text" name="email" id="exampleEmail" />
                    </Col>
                </FormGroup>
                <FormGroup row>
                    <Label for="exampleEmail" sm={6} xs={6}>Fin del segundo trimestre:</Label>
                    <Col sm={6}>
                        <Input type="text" name="email" id="exampleEmail" />
                    </Col>
                </FormGroup>
                <FormGroup row>
                    <Label for="exampleEmail" sm={6} xs={6}>Fecha estimada de parto:</Label>
                    <Col sm={6}>
                        <Input type="text" name="email" id="exampleEmail" />
                    </Col>
                </FormGroup>
                <FormGroup row>
                    <Label for="exampleEmail" sm={6} xs={6}>Edad gestacional:</Label>
                    <Col sm={6}>
                        <Input type="text" name="email" id="exampleEmail" />
                    </Col>
                </FormGroup>

               





            </CardBody>
            <CardFooter >
            <FormGroup tag="fieldset">
                <ButtonToggle color="primary">Calcular</ButtonToggle>{' '}
                <ButtonToggle color="secondary">Limpiar</ButtonToggle>{' '}
                
                </FormGroup>
            </CardFooter>
        </Card>
    </React.Fragment>
    )
}

export default EdadGestacional;