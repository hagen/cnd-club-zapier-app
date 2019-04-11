# Cliniconnet App
With a Cliniconnect account (connected to your Cliniko account)
use our Zapier App to automate your practice and patient comms.

# Triggers
## Appointment attended
**Parameters**
- Delay?
WE ALWAYS WANT TO KNOW THIS! Patients arriving for their appointments is a huge
factor in any number of automations and campaigns. A really common use for this
trigger is sending post-appointment surveys. If you're trying to collect feedback,
link this trigger action with a *Delay by Zapier*, and then connect *Wuforms*,
*Gravity Forms*, *Typeform*, or whichever form-sending service you prefer!
The survey can be sent out a few hours after the appointment. If you're really
crafty, connect [*Promoter.io*](https://www.promoter.io/) to your Zap and send a Net Promoter Score email to the
patient. *Promoter.io* have sent over 5 million of these, so they have the process
down to a fine art and will give you an unprecedented view of your Detractors, Passives, and Promoters.
**No other tool that integrates with Cliniko comes close to this.**

### Bonus round
When a patient submits their score, use *Promoter.io*'s trigger 'Feedback Submitted or Updated'
in another Zap to add patients with **high** NPS scores to a *Mailchimp* List.
This becomes your 'high NPS patient list'. This list will continue to grow,
so send email campaigns to patients in this list to help generate more customers!
And because the list is already in Mailchimp, you're all set!

## Appointment not attended
**Parameters**
- Delay?
We always want to know this too. DNAs are the blight of a practice! Wasted slot.
If a patient has not shown up, it's now time to get your No-show policy into action.
The great news is that with *Cliniconnect* you can now kick off
a customised DNA automation, which could include emails, SMS, sending missed fee
invoices, and so on. What's more, you can also check a patient's no-show history
to potential run different DNA automations against them. POWER!

## Patient birthday
**Parameters**
- Days before
This trigger is fired when it's a patient's birthday. Optionally, fire the trigger
a number of days _before_ their birthday.

## Patient hasn't rebooked
**Parameters**
- Time elapsed
- Last appointment type
- Retro?
This is one of our most powerful triggers, allowing you to configure a period
of time (days, weeks, months, years) after which you want to know about patients
that have no further appointment activity. If needed, you may also specify
an appointment type this applies to. You may also optionally back-date
this trigger so that it'll fire for existing patients that meet your criteria,
as well as patients that *fall into* this segment over time. It's great for
on-going patient reactivation.
If your criteria are patients who have no appointment in the last 6 months,
and it's been 6 months and 1 day, this trigger will fire for that patient.
If on the day after (6 months and 2 days), the patient still has no new appointments
this does not cause the trigger to fire again.
If that patient rebooks however, that will reset the trigger for this patient.
If after a further 6 months and 1 day the patient has no more appointments, this
trigger will fire again.

## Recall due
**Parameters**
- Days before
- Retro?
When a Recall is due, this trigger will run. Optionally, set a period of days
the trigger should run _before_ the recall is due.
This trigger can optionally pick up old recalls in Cliniko that have not yet
been marked 'Recalled'.

# Updates
## Update a Recall
If working with the Recalls trigger, use this Create step to mark a Recall as recalled.
This will update the Recall in Cliniko, and show in your Patient Recals report.