import React, { useState, useEffect } from 'react'
import { useDispatch } from 'react-redux'
import PropTypes from 'prop-types'
import { GithubPicker } from 'react-color'
import { editCard, archiveCard } from '../../actions/board'
import {
  Modal,
  TextField,
  Button,
  Grid,
  Checkbox,
  FormGroup,
  FormControlLabel,
} from '@material-ui/core'
import CloseIcon from '@material-ui/icons/Close'
import MoveCard from './MoveCard'
import DeleteCard from './DeleteCard'
import CardMembers from './CardMembers'
import Checklist from '../checklist/Checklist'
import useStyles from '../../utils/modalStyles'

// Date Picker MUI version 4
import 'date-fns'
import DateFnsUtils from '@date-io/date-fns'

import {
  MuiPickersUtilsProvider,
  KeyboardTimePicker,
  KeyboardDatePicker,
} from '@material-ui/pickers'

const CardModal = ({ cardId, open, setOpen, card, list }) => {
  const classes = useStyles()
  const [title, setTitle] = useState(card.title)
  const [description, setDescription] = useState(card.description)
  const dispatch = useDispatch()

  useEffect(() => {
    setTitle(card.title)
    setDescription(card.description)
  }, [card])

  const onTitleDescriptionSubmit = async (e) => {
    e.preventDefault()
    dispatch(
      editCard(cardId, {
        title,
        description,
        startDate: selectedStartDate,
        dueDate: selectedDueDate,
        markAsCompleted: isCardCompleted,
      })
    )
  }

  const onArchiveCard = async () => {
    dispatch(archiveCard(cardId, true))
    setOpen(false)
  }

  // MUI Version 4 Date Pickers
  // The first commit of Material-UI
  const [selectedStartDate, setSelectedStartDate] = useState(card.startDate)

  const [selectedDueDate, setSelectedDueDate] = useState(card.dueDate)

  const handleStartDateChange = (date) => {
    setSelectedStartDate(date)
  }

  const handleDueDateChange = (date) => {
    setSelectedDueDate(date)
  }

  // Mark as completed
  const [isCardCompleted, setIsCardCompleted] = useState(card.markAsCompleted)
  const isCardCompletedHandleChange = (event) => {
    setIsCardCompleted(event.target.checked)
  }

  return (
    <Modal open={open} onClose={() => setOpen(false)}>
      <div className={`${classes.paper} ${classes.cardModal}`}>
        <form onSubmit={(e) => onTitleDescriptionSubmit(e)}>
          <div className={classes.modalTop}>
            <TextField
              variant='outlined'
              margin='normal'
              required
              fullWidth
              multiline
              label='Card title'
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              onKeyPress={(e) =>
                e.key === 'Enter' && onTitleDescriptionSubmit(e)
              }
              className={classes.cardTitle}
            />
            <Button onClick={() => setOpen(false)}>
              <CloseIcon />
            </Button>
          </div>
          <TextField
            variant='outlined'
            margin='normal'
            fullWidth
            multiline
            label='Card description'
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />

          <div>
            <MuiPickersUtilsProvider utils={DateFnsUtils}>
              <Grid container spacing={2}>
                <Grid item>
                  <KeyboardDatePicker
                    variant='inline'
                    format='MM/dd/yyyy'
                    margin='normal'
                    id='Start Date'
                    label='Start Date'
                    value={selectedStartDate}
                    onChange={handleStartDateChange}
                    KeyboardButtonProps={{
                      'aria-label': 'Start date',
                    }}
                  />
                </Grid>

                <Grid item>
                  <KeyboardDatePicker
                    variant='inline'
                    format='MM/dd/yyyy'
                    margin='normal'
                    id='Due Date'
                    label='Due Date'
                    value={selectedDueDate}
                    onChange={handleDueDateChange}
                    KeyboardButtonProps={{
                      'aria-label': 'Due date',
                    }}
                  />
                </Grid>
              </Grid>
            </MuiPickersUtilsProvider>
          </div>

          <FormGroup row>
            <FormControlLabel
              control={
                <Checkbox
                  disabled={!card.startDate && !card.dueDate}
                  checked={isCardCompleted}
                  onChange={isCardCompletedHandleChange}
                  inputProps={{ 'aria-label': 'primary checkbox' }}
                />
              }
              label='Mark as completed'
            />
          </FormGroup>

          {/* Disable the button if no changes */}
          <Button
            type='submit'
            variant='contained'
            color='primary'
            disabled={
              title === card.title &&
              (description === card.description ||
                (description === '' && !card.description)) &&
              selectedStartDate === card.startDate &&
              selectedDueDate === card.dueDate &&
              isCardCompleted === card.markAsCompleted
            }
            className={classes.button}>
            Save All Changes
          </Button>
        </form>
        <div className={classes.modalSection}>
          <CardMembers card={card} />
          <div>
            <h3 className={classes.labelTitle}>Label</h3>
            <GithubPicker
              className={classes.colorPicker}
              onChange={async (color) =>
                dispatch(editCard(cardId, { label: color.hex }))
              }
            />
            <Button
              className={classes.noLabel}
              variant='outlined'
              onClick={async () =>
                dispatch(editCard(cardId, { label: 'none' }))
              }>
              No Label
            </Button>
          </div>
        </div>
        <Checklist card={card} />
        <div className={classes.modalSection}>
          <MoveCard cardId={cardId} setOpen={setOpen} thisList={list} />
          <div className={classes.modalBottomRight}>
            <Button
              variant='contained'
              className={classes.archiveButton}
              onClick={onArchiveCard}>
              Archive Card
            </Button>
            <DeleteCard cardId={cardId} setOpen={setOpen} list={list} />
          </div>
        </div>
      </div>
    </Modal>
  )
}

CardModal.propTypes = {
  cardId: PropTypes.string.isRequired,
  open: PropTypes.bool.isRequired,
  setOpen: PropTypes.func.isRequired,
  card: PropTypes.object.isRequired,
  list: PropTypes.object.isRequired,
}

export default CardModal
