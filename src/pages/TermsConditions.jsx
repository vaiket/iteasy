import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import styles from './Legal.module.css';

const TermsConditions = () => {
  const navigate = useNavigate();

  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: 'auto' });
    document.documentElement.scrollTop = 0;
    document.body.scrollTop = 0;
  }, []);
  return (
    <div className={styles.legalPage}>
      <div className={styles.legalContainer}>
        <div className={styles.legalHeader}>
          <button 
            className={styles.backButton}
            onClick={() => navigate('/')}
          >
            ← Back to Home
          </button>
          <h1 className={styles.legalTitle}>Terms and Conditions</h1>
          <p className={styles.legalMeta}>Effective Date: 1 Jan,2026 | Last Updated: 1 May, 2026</p>
        </div>

        <div className={styles.legalContent}>
          <p className={styles.intro}>
            These Terms and Conditions ('Terms') govern your use of PixelStack's website and services. By accessing our website, requesting a quote, or engaging our services, you agree to be bound by these Terms. Please read them carefully before proceeding.
          </p>

          <section className={styles.section}>
            <h2>1. Definitions</h2>
            <ul className={styles.list}>
              <li><strong>'PixelStack', 'we', 'us', 'our'</strong> — refers to PixelStack, a web development and digital solutions agency based in Ahmedabad, Gujarat, India</li>
              <li><strong>'Client', 'you', 'your'</strong> — refers to any individual, company, or organization that engages PixelStack for services</li>
              <li><strong>'Services'</strong> — refers to web development, landing pages, e-commerce development, AI/automation solutions, UI/UX design, digital marketing, logo design, business cards, AI product images, and related digital services</li>
              <li><strong>'Project'</strong> — refers to any specific work engagement agreed upon between PixelStack and the Client</li>
              <li><strong>'Deliverables'</strong> — refers to the final work product(s) provided to the Client upon project completion</li>
            </ul>
          </section>

          <section className={styles.section}>
            <h2>2. Services Offered</h2>
            <p>PixelStack provides the following services to online and offline clients, locally in India and internationally (USA, UK, and beyond):</p>
            <ul className={styles.list}>
              <li>Website Design & Development (Landing Pages, Business Websites, Web Applications)</li>
              <li>E-commerce Development (Shopify, WooCommerce, Custom Stores)</li>
              <li>AI & Automation Solutions (Chatbots, Workflow Automation, AI Integration)</li>
              <li>CRM Development & Business Systems (Odoo, Zoho Integration)</li>
              <li>UI/UX Design (Wireframes, Prototypes, Interface Design)</li>
              <li>Digital Marketing & SEO</li>
              <li>Logo Design & Brand Identity</li>
              <li>Business Card Design</li>
              <li>AI Product Photography & Instagram Content</li>
              <li>Google Business Profile Setup & Management</li>
            </ul>
            <p>All services are subject to a separate project agreement or proposal that outlines specific scope, deliverables, timeline, and pricing.</p>
          </section>

          <section className={styles.section}>
            <h2>3. Project Engagement & Scope</h2>
            
            <h3>3.1 Project Initiation</h3>
            <ul className={styles.list}>
              <li>All projects begin with a written agreement, proposal, or confirmed scope of work</li>
              <li>Work commences only after receipt of the advance payment as specified in the proposal</li>
              <li>Any work performed before formal agreement is at PixelStack's sole discretion</li>
            </ul>

            <h3>3.2 Scope Changes</h3>
            <ul className={styles.list}>
              <li>Any changes to the agreed scope must be requested in writing (email or WhatsApp)</li>
              <li>Changes outside the original scope will be quoted separately and require client approval</li>
              <li>PixelStack reserves the right to adjust timelines accordingly for scope changes</li>
            </ul>
          </section>

          <section className={styles.section}>
            <h2>4. Payment Terms</h2>
            
            <h3>4.1 Standard Payment Structure</h3>
            <ul className={styles.list}>
              <li><strong>Advance Payment:</strong> 50% of the total project cost is due before work begins</li>
              <li><strong>Final Payment:</strong> Remaining 50% is due upon project completion, before final delivery or handover</li>
              <li>For ongoing retainer services: Payment is due on the 1st of each month</li>
            </ul>

            <h3>4.2 Payment Methods</h3>
            <ul className={styles.list}>
              <li>UPI, Bank Transfer (NEFT/IMPS/RTGS), PayPal (international clients)</li>
              <li>All prices are in INR (₹) for Indian clients; USD ($) or GBP (£) for international clients unless otherwise agreed</li>
            </ul>

            <h3>4.3 Late Payments</h3>
            <ul className={styles.list}>
              <li>Invoices unpaid after 7 days of the due date may attract a 2% monthly late fee</li>
              <li>PixelStack reserves the right to pause or suspend project work for overdue payments</li>
              <li>Final deliverables will not be transferred until full payment is received</li>
            </ul>
          </section>

          <section className={styles.section}>
            <h2>5. Revisions Policy</h2>
            <ul className={styles.list}>
              <li>Each project includes a specified number of revisions as stated in the proposal</li>
              <li>Standard packages include 2 (two) free revision rounds</li>
              <li>Revisions must be requested in writing and within 7 days of receiving the draft</li>
              <li>Additional revisions beyond the included rounds will be charged at ₹300-500 per hour</li>
              <li>Revisions that fall outside the original scope are treated as change requests (see Section 3.2)</li>
            </ul>
          </section>

          <section className={styles.section}>
            <h2>6. Delivery Timeline</h2>
            <ul className={styles.list}>
              <li>Project timelines are estimated and communicated in the project proposal</li>
              <li>Timelines begin from the date of advance payment receipt AND receipt of all required client content</li>
              <li>Delays caused by late content submission, slow feedback, or client unavailability are not PixelStack's responsibility</li>
              <li>PixelStack will notify the client of any timeline changes due to unforeseen circumstances</li>
            </ul>
          </section>

          <section className={styles.section}>
            <h2>7. Client Responsibilities</h2>
            <p>The client agrees to:</p>
            <ul className={styles.list}>
              <li>Provide all required content (text, images, logos, business details) in a timely manner</li>
              <li>Ensure all content provided is owned by the client or properly licensed for use</li>
              <li>Review and provide feedback within agreed timeframes</li>
              <li>Designate a primary point of contact for efficient communication</li>
              <li>Ensure accuracy of all information provided (address, phone, business details)</li>
            </ul>
          </section>

          <section className={styles.section}>
            <h2>8. Intellectual Property & Ownership</h2>
            
            <h3>8.1 Upon Full Payment</h3>
            <ul className={styles.list}>
              <li>Full ownership of the final deliverables transfers to the client upon receipt of complete payment</li>
              <li>Source code, design files, and project assets are handed over to the client</li>
            </ul>

            <h3>8.2 Before Full Payment</h3>
            <ul className={styles.list}>
              <li>All work-in-progress remains the intellectual property of PixelStack until final payment</li>
              <li>PixelStack reserves the right to withhold delivery until all dues are cleared</li>
            </ul>

            <h3>8.3 Portfolio Rights</h3>
            <ul className={styles.list}>
              <li>PixelStack retains the right to showcase completed work in our portfolio, website, and social media unless a written confidentiality agreement is signed</li>
              <li>Client names and project details may be referenced in case studies</li>
            </ul>

            <h3>8.4 Third-Party Assets</h3>
            <ul className={styles.list}>
              <li>Stock photos, fonts, plugins, or third-party tools used in the project may carry their own licenses</li>
              <li>PixelStack will inform clients of any third-party license fees that the client must maintain independently</li>
            </ul>
          </section>

          <section className={styles.section}>
            <h2>9. Confidentiality</h2>
            <p>Both parties agree to maintain confidentiality of:</p>
            <ul className={styles.list}>
              <li>Business strategies, pricing, and proprietary information shared during the project</li>
              <li>Client data, customer lists, and internal processes</li>
              <li>Any information explicitly marked as confidential</li>
            </ul>
            <p>This obligation continues for 2 years after project completion unless both parties agree otherwise in writing.</p>
          </section>

          <section className={styles.section}>
            <h2>10. Cancellation & Refund Policy</h2>
            
            <h3>10.1 Client-Initiated Cancellation</h3>
            <ul className={styles.list}>
              <li>Cancellations before work begins: Full advance refund minus a 10% processing fee</li>
              <li>Cancellations after work has begun: No refund of advance; work completed will be invoiced proportionally</li>
              <li>Cancellations after 50% project completion: Full project amount is due</li>
            </ul>

            <h3>10.2 PixelStack-Initiated Cancellation</h3>
            <ul className={styles.list}>
              <li>If PixelStack cancels due to unforeseen circumstances, the client receives a full refund of amounts paid</li>
              <li>If cancellation is due to client breach of these Terms, no refund will be issued</li>
            </ul>

            <h3>10.3 Non-Refundable Items</h3>
            <ul className={styles.list}>
              <li>Third-party costs already incurred (domain registration, hosting, premium plugins, stock images)</li>
              <li>Work already completed and delivered in any form</li>
            </ul>
          </section>

          <section className={styles.section}>
            <h2>11. Limitation of Liability</h2>
            <p>To the maximum extent permitted by applicable law:</p>
            <ul className={styles.list}>
              <li>PixelStack's total liability shall not exceed the total amount paid by the client for the specific project</li>
              <li>PixelStack is not liable for indirect, incidental, special, or consequential damages</li>
              <li>PixelStack is not responsible for losses resulting from client-provided inaccurate content or information</li>
              <li>PixelStack does not guarantee specific rankings, traffic, or business results from websites or SEO services</li>
              <li>PixelStack is not liable for third-party service failures (hosting, domain, payment gateways)</li>
            </ul>
          </section>

          <section className={styles.section}>
            <h2>12. Warranties & Disclaimers</h2>
            <ul className={styles.list}>
              <li>PixelStack warrants that all work will be completed with professional care and skill</li>
              <li>Websites are delivered compatible with modern browsers at the time of delivery — not guaranteed for future browser updates</li>
              <li>PixelStack does not warrant that websites will be free from errors indefinitely after handover</li>
              <li>No guarantee is made for specific search engine rankings or business outcomes</li>
              <li>AI-generated content delivered as part of our services is provided as-is — clients are responsible for reviewing accuracy</li>
            </ul>
          </section>

          <section className={styles.section}>
            <h2>13. Post-Delivery Support</h2>
            <ul className={styles.list}>
              <li>Standard projects include 7 days of complimentary bug-fixing support post-delivery</li>
              <li>Support beyond 7 days is available as a paid retainer or hourly service</li>
              <li>Support does not cover new features, content changes, or third-party service issues</li>
              <li>Ongoing maintenance packages are available — contact us for pricing</li>
            </ul>
          </section>

          <section className={styles.section}>
            <h2>14. Governing Law & Dispute Resolution</h2>
            <ul className={styles.list}>
              <li>These Terms are governed by the laws of India, specifically applicable to Ahmedabad, Gujarat</li>
              <li>Any disputes will first be attempted to be resolved through direct negotiation</li>
              <li>If unresolved, disputes will be referred to a mutually agreed mediator</li>
              <li>If mediation fails, disputes shall be subject to the exclusive jurisdiction of courts in Ahmedabad, Gujarat, India</li>
              <li>For international clients: disputes may be resolved through international arbitration under UNCITRAL rules</li>
            </ul>
          </section>

          <section className={styles.section}>
            <h2>15. Entire Agreement</h2>
            <p>These Terms, together with any signed project proposal, work agreement, or statement of work, constitute the entire agreement between PixelStack and the client. They supersede all prior discussions, representations, or understandings. No verbal agreement overrides these written Terms.</p>
          </section>

          <section className={styles.section}>
            <h2>16. Amendments</h2>
            <p>PixelStack reserves the right to update these Terms at any time. Updated Terms will be posted on our website with a revised effective date. Continued use of our services after changes constitutes acceptance of the updated Terms. For existing projects, the Terms in effect at the time of project commencement apply.</p>
          </section>

          <section className={styles.section}>
            <h2>17. Contact Information</h2>
            <p>For any questions regarding these Terms and Conditions:</p>
            <div className={styles.contactInfo}>
              <p><strong>Company:</strong> PixelStack</p>
              <p><strong>Location:</strong> Ahmedabad, Gujarat, India</p>
              <p><strong>Email:</strong> your@email.com</p>
              <p><strong>Phone:</strong> +91 XXXXX XXXXX</p>
              <p><strong>Website:</strong> www.pixelstack.in</p>
            </div>
          </section>

          <div className={styles.footerNote}>
            <p>© 2026 PixelStack · Ahmedabad, India · All Rights Reserved</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TermsConditions;
