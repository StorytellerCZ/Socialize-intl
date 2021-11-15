/**
 * @authors Jan Dvorak
 */
/* eslint-disable max-len */
export default {
    'email.enrollAccount.subject': 'Invitation to Socialize-starter for {username}',
    'email.enrollAccount.message': `Hello {username}\n\n
    We would like to invite you to Socialize-starter! We have created a special personal account for you where you can access all features of Socialize-starter!
    To activate your account, simply click the link below:\n\n{url}`,
    'email.resetPassword.subject': 'Socialize-starter reset password',
    'email.resetPassword.message': `Hello {username}!\n\n We have received a request to reset your password for your account.
        Please follow the link bellow to reset your password:\n\n{url}`,
    'email.verifyEmail.subject': 'Socialize-starter e-mail verification',
    'email.verifyEmail.message': 'Hello {username}!\n\n Please verify your e-mail address by clicking on the link below:\n\n{url}',
    // New html email keys
    'email.salutation': 'Hello {username},',
    'email.welcome': 'Welcome to Socialize-starter!',
    'email.signature': 'Sincerely,<br />Socialize-starter team',
    // Enrollment
    'email.enrollAccount.welcome': 'Welcome aboard',
    'email.enrollAccount.messageHtml': 'We would like to invite you to Socialize-starter! We went ahead and prepared a personal account for you where you can access all features of Socialize-starter!',
    'email.enrollAccount.button': 'Access your account',
    'email.enrollAccount.signature': 'We are looking forward to see you,<br />Socialize-starter team',
    // Reset password
    'email.resetPassword.messageHtml': 'We have received a request to reset your password for your account, please click on the button bellow to continue the process. If you haven\'t made this request you can ignore this e-mail, but it might be a good time to review your security settings.',
    'email.resetPassword.button': 'Reset password',
    // E-mail verification
    'email.verifyEmail.messageHtml': 'We are happy to have you on board! Please click the button bellow to verify this e-mail address.',
    'email.verifyEmail.button': 'Verify this e-mail address',
    // Getting premium from admins
    'email.adminUpgrade.subject': 'Your account has been upgraded',
    'email.adminUpgrade.message': `We have upgraded your account to {plan, select,
    explorer {Explorer}
    adventurer {Adventurer}
    storyteller {Storyteller}
  } tier for the next {days} days.\n\nEnjoy,\nSocialize-starter team`,
    'email.adminUpgrade.messageHtml': `We have upgraded your account to {plan, select,
    explorer {Explorer}
    adventurer {Adventurer}
    storyteller {Storyteller}
  } tier for the next {days} days. Enjoy!`,
    'email.verification': 'E-mail verification',
    'email.verifying': 'Verifying your e-mail. This will take just a moment...',
    'email.verified': 'Great news! Your e-mail has been verified!'
};    /* eslint-enable max-len */