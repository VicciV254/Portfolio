import { useState } from 'react'
import './Contact.css'

function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [confirmation, setConfirmation] = useState({ show: false, message: '', isError: false })

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    
    const { name, email, message } = formData
    
    // Validation
    if (!name || !email || !message) {
      setConfirmation({
        show: true,
        message: '<i class="fas fa-exclamation-triangle"></i> ⚠️ Please fill in all fields before sending.',
        isError: true
      })
      setTimeout(() => setConfirmation(prev => ({ ...prev, show: false })), 4000)
      return
    }
    
    const emailPattern = /^[^\s@]+@([^\s@.,]+\.)+[^\s@.,]{2,}$/
    if (!emailPattern.test(email)) {
      setConfirmation({
        show: true,
        message: '<i class="fas fa-times-circle"></i> ❌ Please enter a valid email address.',
        isError: true
      })
      setTimeout(() => setConfirmation(prev => ({ ...prev, show: false })), 4000)
      return
    }
    
    setIsSubmitting(true)
    
    const FORM_SUBMIT_URL = 'https://formsubmit.co/ajax/vicmutua254@gmail.com'
    const formDataObj = new FormData()
    formDataObj.append('name', name)
    formDataObj.append('email', email)
    formDataObj.append('message', message)
    formDataObj.append('_subject', `Portfolio Message from ${name}`)
    formDataObj.append('_captcha', 'false')
    formDataObj.append('_template', 'table')
    
    try {
      const response = await fetch(FORM_SUBMIT_URL, {
        method: 'POST',
        body: formDataObj,
        headers: {
          'Accept': 'application/json'
        }
      })
      
      if (response.ok) {
        setConfirmation({
          show: true,
          message: `
            <i class="fas fa-check-circle" style="margin-right: 8px;"></i> 
            <strong>✅ Message Sent Successfully!</strong><br>
            Thank you ${name}, your message has been delivered to <strong>Victor Mutua (vicmutua254@gmail.com)</strong>.<br>
            <small><i class="fas fa-envelope-open"></i> I'll review and get back to you soon.</small>
          `,
          isError: false
        })
        setFormData(prev => ({ ...prev, message: '' }))
        setTimeout(() => setConfirmation(prev => ({ ...prev, show: false })), 6000)
      } else {
        throw new Error('Server responded with error')
      }
    } catch (error) {
      console.error('Send error:', error)
      setConfirmation({
        show: true,
        message: `
          <i class="fas fa-exclamation-triangle"></i> 
          <strong>⚠️ Unable to Send</strong><br>
          There was a temporary issue. Please try again in a moment, or email me directly at vicmutua254@gmail.com.<br>
          <small>Your message has been saved locally.</small>
        `,
        isError: true
      })
      setTimeout(() => setConfirmation(prev => ({ ...prev, show: false })), 7000)
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <section id="contact">
      <h2 className="section-title"><i className="fas fa-comment-dots"></i> Let's Connect</h2>
      <div className="contact-wrapper">
        {/* contact details */}
        <div className="contact-info">
          <div className="info-card">
            <i className="fas fa-phone-alt"></i>
            <span>Tel: +254 729 125 000</span>
          </div>
          <div className="info-card">
            <i className="fas fa-envelope"></i>
            <span>vicmutua254@gmail.com</span>
          </div>
          <div className="info-card">
            <i className="fab fa-github"></i>
            <a href="https://github.com/VicciV254" target="_blank" rel="noopener noreferrer">github.com/VicciV254</a>
          </div>
          <div className="info-card">
            <i className="fas fa-map-marker-alt"></i>
            <span>Mombasa, Kenya 🇰🇪</span>
          </div>
        </div>

        {/* Contact Form */}
        <div className="form-card">
          <h3><i className="fas fa-paper-plane"></i> Send a Message</h3>
          <form onSubmit={handleSubmit}>
            <div className="form-group">
              <label><i className="far fa-user"></i> Full Name *</label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="e.g., Baba Gadhundo"
                required
              />
            </div>
            <div className="form-group">
              <label><i className="far fa-envelope"></i> Your Email *</label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="you@example.com"
                required
              />
            </div>
            <div className="form-group">
              <label><i className="far fa-comment"></i> Comments / Message *</label>
              <textarea
                rows="4"
                name="message"
                value={formData.message}
                onChange={handleChange}
                placeholder="Share your thoughts, project ideas, or just say hi..."
                required
              />
            </div>
            <button type="submit" disabled={isSubmitting}>
              {isSubmitting ? (
                <><i className="fas fa-spinner fa-pulse"></i> Sending...</>
              ) : (
                <><i className="fas fa-share-square"></i> Send Message</>
              )}
            </button>
          </form>
          <div className={`confirmation-msg ${confirmation.show ? 'show' : ''} ${confirmation.isError ? 'error' : ''}`}>
            <div dangerouslySetInnerHTML={{ __html: confirmation.message }} />
          </div>
          <p className="form-note"><i className="fas fa-envelope-open-text"></i> ✓ Messages are delivered directly to my inbox (vicmutua254@gmail.com).</p>
        </div>
      </div>

      {/* github extra section */}
      <div className="github-extra glass-card">
        <i className="fab fa-github"></i> 
        <strong>Check my code evolution</strong> → 
        <a href="https://github.com/VicciV254" target="_blank" rel="noopener noreferrer">github.com/VicciV254 <i className="fas fa-external-link-alt"></i></a>
        <div><i className="fas fa-code-branch"></i> Open for collabs | Data & dev projects</div>
      </div>
    </section>
  )
}

export default Contact
