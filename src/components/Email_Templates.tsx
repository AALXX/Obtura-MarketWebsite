function getLeadNotificationEmailTemplate(formType: 'demo' | 'waitlist', data: any) {
    return `<!DOCTYPE html>
<html>
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <style>
    body {
      font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;
      background-color: #0a0a0a;
      margin: 0;
      padding: 40px 20px;
      color: #e0e0e0;
    }
    .container {
      max-width: 640px;
      margin: auto;
      background-color: #1a1a1a;
      border-radius: 16px;
      overflow: hidden;
      box-shadow: 0 0 40px rgba(255, 107, 53, 0.08);
      border: 1px solid #1f1f1f;
    }
    .header {
      padding: 40px;
      text-align: center;
      background: #0a0a0a;
      border-bottom: 1px solid #2a2a2a;
    }
    .logo {
      font-size: 26px;
      font-weight: bold;
      color: #fff;
      letter-spacing: -0.5px;
    }
    .highlight {
      text-color: #ff8b55;
      font-weight: 600;
    }
    .content {
      padding: 40px;
      font-size: 15px;
      line-height: 1.7;
      color: #d0d0d0;
    }
    h2 {
      margin-top: 0;
      color: #fff;
      font-size: 26px;
      font-weight: 700;
      margin-bottom: 20px;
    }
    .section {
      background-color: #0f0f0f;
      border: 1px solid #2a2a2a;
      border-radius: 10px;
      padding: 20px;
      margin: 24px 0;
    }
    .row {
      display: flex;
      justify-content: space-between;
      padding: 10px 0;
      border-bottom: 1px solid #1f1f1f;
    }
    .row:last-child {
      border-bottom: none;
    }
    .label {
      color: #888;
      font-size: 13px;
    }
    .value {
      color: #fff;
      font-weight: 500;
      text-align: right;
    }
    .footer {
      padding: 30px 40px;
      background-color: #0a0a0a;
      border-top: 1px solid #2a2a2a;
      font-size: 13px;
      text-align: center;
      color: #777;
    }
  </style>
</head>
<body>
  <div class="container">
    
    <div class="header">
      <div class="logo">Obtura</div>
    </div>

    <div class="content">

      <h2>New ${formType === 'demo' ? 'Demo Request' : 'Waitlist Signup'}</h2>

      <p>You just received a new ${formType === 'demo' ? '<span class="highlight">demo request</span>' : '<span class="highlight">waitlist signup</span>'} from your website.</p>

      <div class="section">
        <div class="row">
          <span class="label">Full Name</span>
          <span class="value">${data.name}</span>
        </div>

        <div class="row">
          <span class="label">Email</span>
          <span class="value">${data.email}</span>
        </div>

        <div class="row">
          <span class="label">Company</span>
          <span class="value">${data.company}</span>
        </div>

        <div class="row">
          <span class="label">Team Size</span>
          <span class="value">${data.teamSize}</span>
        </div>

        ${
            formType === 'demo'
                ? `
          <div class="row">
            <span class="label">Role</span>
            <span class="value">${data.role || '—'}</span>
          </div>

          <div class="row">
            <span class="label">Phone</span>
            <span class="value">${data.phone || '—'}</span>
          </div>

          <div class="row">
            <span class="label">Preferred Date</span>
            <span class="value">${data.preferredDate || 'Not specified'}</span>
          </div>
        `
                : ''
        }

        <div class="row">
          <span class="label">Referral Source</span>
          <span class="value">${data.referral || '—'}</span>
        </div>
      </div>

      <div class="section">
        <div class="label" style="margin-bottom: 6px;">Message</div>
        <div class="value" style="text-align: left; color:#ccc; line-height:1.6;">
          ${data.message ? data.message.replace(/\n/g, '<br>') : 'No message provided.'}
        </div>
      </div>

      <p style="color:#666; font-size:14px;">Respond to the lead as soon as possible to maintain conversion rates.</p>

    </div>

    <div class="footer">
      Lead notification from Obtura<br/>
      © 2025 Obtura — All rights reserved.
    </div>

  </div>
</body>
</html>`
}

export default getLeadNotificationEmailTemplate
