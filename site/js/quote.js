/* ============================================
   ORNATE CHRISTMAS LIGHTING — QUOTE FORM JS
   Sends submissions to Supabase
   ============================================ */

// ⚠️ SETUP REQUIRED:
// 1. Create a free Supabase project at supabase.com
// 2. Replace SUPABASE_URL and SUPABASE_ANON_KEY below with your project values
// 3. Run the SQL in /admin/setup.sql to create the quotes table

const SUPABASE_URL = 'https://ebhwujdnrumixcbxaiqv.supabase.co';
const SUPABASE_ANON_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImViaHd1amRucnVtaXhjYnhhaXF2Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NzQ5MjI1MTUsImV4cCI6MjA5MDQ5ODUxNX0.jniHETwFaeA8AtyQIJYlGiA4-NQ69go9MYC3h-mcrNM';

document.addEventListener('DOMContentLoaded', () => {
  const form = document.getElementById('quoteForm');
  const submitBtn = document.getElementById('submitBtn');
  const formError = document.getElementById('formError');
  const formSuccess = document.getElementById('formSuccess');

  if (!form) return;

  form.addEventListener('submit', async (e) => {
    e.preventDefault();
    formError.style.display = 'none';

    // Basic validation
    const required = form.querySelectorAll('[required]');
    let valid = true;
    required.forEach(field => {
      if (!field.value.trim()) {
        field.style.borderColor = '#ef4444';
        valid = false;
      } else {
        field.style.borderColor = '';
      }
    });

    if (!valid) {
      formError.textContent = 'Please fill in all required fields.';
      formError.style.display = 'block';
      return;
    }

    // Email validation
    const emailField = form.querySelector('#email');
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(emailField.value)) {
      emailField.style.borderColor = '#ef4444';
      formError.textContent = 'Please enter a valid email address.';
      formError.style.display = 'block';
      return;
    }

    // Build payload
    const payload = {
      first_name: form.firstName.value.trim(),
      last_name: form.lastName.value.trim(),
      email: form.email.value.trim().toLowerCase(),
      phone: form.phone.value.trim(),
      address: form.address.value.trim(),
      city: form.city.value.trim(),
      property_type: form.propertyType.value,
      service: form.service.value,
      home_size: form.homeSize.value || null,
      referral: form.referral.value || null,
      message: form.message.value.trim() || null,
      status: 'new',
      created_at: new Date().toISOString()
    };

    // Loading state
    submitBtn.disabled = true;
    submitBtn.innerHTML = '<i class="ph ph-spinner"></i> Sending...';

    try {
      const response = await fetch(`${SUPABASE_URL}/rest/v1/quotes`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'apikey': SUPABASE_ANON_KEY,
          'Authorization': `Bearer ${SUPABASE_ANON_KEY}`,
          'Prefer': 'return=minimal'
        },
        body: JSON.stringify(payload)
      });

      if (!response.ok) {
        const err = await response.json().catch(() => ({}));
        throw new Error(err.message || 'Submission failed. Please try again.');
      }

      // Show success
      form.style.display = 'none';
      formSuccess.style.display = 'block';

      // Scroll to success message
      formSuccess.scrollIntoView({ behavior: 'smooth', block: 'center' });

    } catch (err) {
      console.error('Quote submission error:', err);
      formError.textContent = err.message || 'Something went wrong. Please call us at (203) 505-5120.';
      formError.style.display = 'block';

      submitBtn.disabled = false;
      submitBtn.innerHTML = '<i class="ph ph-paper-plane-tilt"></i> Request My Free Quote';
    }
  });

  // Clear error highlight on input
  form.querySelectorAll('.form__input, .form__select, .form__textarea').forEach(field => {
    field.addEventListener('input', () => {
      field.style.borderColor = '';
      formError.style.display = 'none';
    });
  });
});
