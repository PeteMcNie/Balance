import React from 'react'
import { Form, Col, Row, Container, FormControl, Button } from 'react-bootstrap'
import { sendIncomeToStore } from '../actions/index'
import { connect } from 'react-redux'

class IncomeInput extends React.Component {
  state = {
    id: 0,
    amount: '',
    description: '',
    category: '',
    frequency: 1
  }

  changeHandler = (evt) => {
    evt.preventDefault()
    const { value, name } = evt.target
    this.setState({
      [name]: value
    })
  }

  sendToStore = () => {
    const data = this.state
    data.id = Date.now()
    this.props.dispatch(sendIncomeToStore(this.state))
    this.setState({
      id: 0,
      amount: 0,
      description: '',
      category: '',
      frequency: 1
    })
  }

  render() {
    return (

      <Form>
        <Container className='mb-2 border border-dark rounded p-0 bg-dark text-white'>
          <Row className='align-middle pt-2 m-0'>
            <Col className='float-left'>
              Income
              </Col>
            <Col>
              <Button onClick={() => this.sendToStore()} className='float-right' size='sm'>Add</Button>
            </Col>
          </Row>
          <Form.Row className='m-0 p-2'>
            <Col>
              <FormControl name='description' value={this.state.description} onChange={(evt) => this.changeHandler(evt)} size='sm' aria-label="Description" placeholder='Description eg. Salary' />
            </Col>
            <Col>
              <FormControl name='amount' value={this.state.amount} onChange={(evt) => this.changeHandler(evt)} size='sm' aria-label="Amount" placeholder='$' />
            </Col>

            <Col>
              <FormControl name='category' value={this.state.category} onChange={(evt) => this.changeHandler(evt)} size='sm' aria-label="Category" placeholder='Insert income source' />
            </Col>
            <Col>
              <Form.Control name='frequency' value={this.state.frequency} onChange={(evt) => this.changeHandler(evt)} size='sm' as="select">
                <option value='1'>One-off</option>
                <option value='7'>Weekly</option>
                <option value='14'>Fortnightly</option>
                <option value='30.4375'>Monthly</option>
                <option value='365.25'>Yearly</option>
              </Form.Control>
            </Col>
          </Form.Row>
        </Container>
      </Form>
    )
  }
}

export default connect()(IncomeInput)
