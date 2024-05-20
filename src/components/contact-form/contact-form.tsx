import {Component, Host, h, Prop} from '@stencil/core';

@Component({
  tag: 'contact-form',
  styleUrl: 'contact-form.css',
  shadow: true,
})
export class ContactForm {

  @Prop() onSubmit: Function;
  @Prop() classNameForm: string;

  private handleSubmit(event: Event) {
    event.preventDefault();
    console.log(this.onSubmit);
    if (this.onSubmit) {
      this.onSubmit(event);
    }
  }
  render() {
    return (
      <Host>
        <form class={this.classNameForm} part="form">

          <label htmlFor="fname">First Name</label>
          <input type="text" id="fname" name="firstname" placeholder="Your name.."/>

          <label htmlFor="lname">Last Name</label>
          <input type="text" id="lname" name="lastname" placeholder="Your last name.."/>

          <label htmlFor="country">Country</label>
          <select id="country" name="country">
            <option value="australia">Australia</option>
            <option value="canada">Canada</option>
            <option value="usa">USA</option>
          </select>

          <label htmlFor="subject">Subject</label>
          <textarea id="subject" name="subject" placeholder="Write something.."></textarea>

          <input type="submit" value="Submit" onClick={(e) => this.handleSubmit(e)}/>

        </form>
      </Host>
    );
  }

}
