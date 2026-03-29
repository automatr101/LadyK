"use client";

import { useEffect } from "react";
import "./page.css";

export default function Home() {
  useEffect(() => {
    const reveals = document.querySelectorAll('.reveal');
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
        }
      });
    }, { threshold: 0.1 });
    reveals.forEach(el => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <>
      {/* HERO */}
      <section className="hero">
        <div className="badge-gold">Digitstem — Ultimate Money Machine</div>
        <h1>The Beginner Course That Shows You How To <span>Earn Your First Commission</span> Online</h1>
        <p>No experience. No product. No following needed. The UMM course gives you the exact step-by-step system to start earning digital commissions from anywhere in the world.</p>
        <a href="https://digitstem.com/t/OGVQeG15eGN2bmttSUxsamQ3c296UT09-MzkyNDUz" className="cta-primary" target="_blank" rel="noopener noreferrer">
          Get The UMM Course Now →
        </a>
        <p className="trust-line">Simple payment process &nbsp;·&nbsp; <span>Instant access</span> &nbsp;·&nbsp; Start today</p>
      </section>

      {/* PROOF BAR */}
      <div className="proof-bar">
        <div className="proof-item reveal">
          <strong>380K+</strong>
          <span>Active Students</span>
        </div>
        <div className="proof-item reveal">
          <strong>Low Cost</strong>
          <span>One Time Only</span>
        </div>
        <div className="proof-item reveal">
          <strong>100%</strong>
          <span>Beginner Friendly</span>
        </div>
        <div className="proof-item reveal">
          <strong>Digital</strong>
          <span>Instant Access</span>
        </div>
      </div>

      {/* WHAT IS UMM */}
      <section className="section reveal">
        <p className="section-label">What Is This</p>
        <h2>The Ultimate Money Machine — Explained Simply</h2>
        <p>The Ultimate Money Machine (UMM) is a video course on Digitstem that teaches complete beginners how to earn digital commissions online — with zero experience, zero product creation, and zero technical skills required.</p>
        <p>You watch the videos, follow the steps, and learn exactly how to promote digital products and earn commissions every time someone buys through your link. It works from your phone. It works from anywhere.</p>
      </section>

      {/* WHAT YOU GET */}
      <section className="features-section reveal">
        <div className="features-inner">
          <p className="section-label">What's Inside</p>
          <h2>Everything You Need to Start Earning</h2>
          <div className="features-grid">
            <div className="feature-card">
              <div className="feature-icon">🎯</div>
              <h3>Step-by-Step Video Training</h3>
              <p>Watch and follow at your own pace. Every step is explained simply so anyone can follow along from day one.</p>
            </div>
            <div className="feature-card">
              <div className="feature-icon">💰</div>
              <h3>How to Find Products to Promote</h3>
              <p>Learn exactly which digital products to promote as a beginner to earn the highest commissions possible.</p>
            </div>
            <div className="feature-card">
              <div className="feature-icon">🔗</div>
              <h3>Setting Up Your Affiliate Links</h3>
              <p>Get your unique links set up correctly so every sale is tracked and every commission goes directly to you.</p>
            </div>
            <div className="feature-card">
              <div className="feature-icon">📱</div>
              <h3>Free Traffic Strategies</h3>
              <p>Learn how to get people clicking your links using free methods — no paid ads, no big budget required.</p>
            </div>
            <div className="feature-card">
              <div className="feature-icon">🏦</div>
              <h3>Getting Paid to Your Bank</h3>
              <p>Withdraw your commissions directly to your local bank account. Works in Nigeria, Ghana, Kenya and 120+ countries.</p>
            </div>
            <div className="feature-card">
              <div className="feature-icon">🚀</div>
              <h3>Your First Commission Fast</h3>
              <p>The course is designed to get you to your first commission as fast as possible — not months from now, but this week.</p>
            </div>
          </div>
        </div>
      </section>

      {/* FOR WHO */}
      <section className="for-who reveal">
        <p className="section-label">Is This For You?</p>
        <h2>This Course Is Perfect If You Are...</h2>
        <div className="checklist-gold">
          <div className="check-item">
            <span className="check-icon">✦</span>
            <p><strong>A complete beginner</strong> who has never made a single coin online and doesn't know where to start</p>
          </div>
          <div className="check-item">
            <span className="check-icon">✦</span>
            <p><strong>A student or young person</strong> looking for a real way to earn extra income from your phone</p>
          </div>
          <div className="check-item">
            <span className="check-icon">✦</span>
            <p><strong>Someone with no budget</strong> who needs a low-cost entry point to start an online income</p>
          </div>
          <div className="check-item">
            <span className="check-icon">✦</span>
            <p><strong>A busy person</strong> who wants a simple system they can work on in less than an hour a day</p>
          </div>
          <div className="check-item">
            <span className="check-icon">✦</span>
            <p><strong>Anyone who has tried</strong> making money online before and failed — and wants a system that actually works</p>
          </div>
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section className="testimonials-section reveal">
        <div className="testimonials-inner">
          <p className="section-label">Real Results</p>
          <h2>What Students Are Saying</h2>
          <div className="testimonials-grid">
            <div className="testimonial-card">
              <div className="stars">★★★★★</div>
              <p>I made my first commission within two weeks of going through this course. The steps are clear and anyone can follow them — even if you've never done anything online before.</p>
              <div className="testimonial-author">
                <div className="author-avatar">KM</div>
                <div className="author-info">
                  <strong>Kwaku Mensah</strong>
                  <span>Student, Ghana</span>
                </div>
              </div>
            </div>
            <div className="testimonial-card">
              <div className="stars">★★★★★</div>
              <p>I finally understand how affiliate marketing works. This course broke everything down in a way that made complete sense to me as a beginner with no experience at all.</p>
              <div className="testimonial-author">
                <div className="author-avatar">AB</div>
                <div className="author-info">
                  <strong>Abena Boateng</strong>
                  <span>Student, Nigeria</span>
                </div>
              </div>
            </div>
            <div className="testimonial-card">
              <div className="stars">★★★★★</div>
              <p>Even with my busy work schedule I was able to set this up and start earning. The system works in the background once you follow the steps inside the course.</p>
              <div className="testimonial-author">
                <div className="author-avatar">KA</div>
                <div className="author-info">
                  <strong>Kofi Asare</strong>
                  <span>Banker, Kenya</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* PRICE */}
      <section className="price-section reveal">
        <p className="section-label">Get Started</p>
        <div className="price-box">
          <p style={{ color: '#888', fontSize: '14px', letterSpacing: '2px', textTransform: 'uppercase' }}>Simple Payment</p>
          <div className="price-tag" style={{ fontSize: '36px', padding: '20px 0' }}>A Low One-Time Investment</div>
          <p className="price-desc">One simple payment. Instant access. Start earning this week.</p>
          <div className="price-includes">
            <div className="price-include-item">Complete UMM Video Course</div>
            <div className="price-include-item">Step-by-step beginner system</div>
            <div className="price-include-item">Your own affiliate link to earn commissions</div>
            <div className="price-include-item">Works from your phone anywhere in the world</div>
            <div className="price-include-item">Direct bank payout to 120+ countries</div>
            <div className="price-include-item">Instant access after purchase</div>
          </div>
          <a href="https://digitstem.com/t/OGVQeG15eGN2bmttSUxsamQ3c296UT09-MzkyNDUz" className="cta-primary" target="_blank" rel="noopener noreferrer" style={{ display: 'block', textAlign: 'center' }}>
            Get Instant Access Now →
          </a>
          <p style={{ marginTop: '16px', fontSize: '13px', color: '#555' }}>Secure payment · Instant access · No recurring fees</p>
        </div>
      </section>

      {/* FOOTER CTA */}
      <section className="footer-cta reveal">
        <h2>Your First Commission Could Be This Week</h2>
        <p>Stop watching others earn online. The UMM course gives you everything you need to start — right now.</p>
        <a href="https://digitstem.com/t/OGVQeG15eGN2bmttSUxsamQ3c296UT09-MzkyNDUz" className="cta-primary" target="_blank" rel="noopener noreferrer">
          Yes, I Want To Start Earning →
        </a>
      </section>

      <footer className="gold-footer">
        <p>©️ 2026 Khadija — Digital Skills & Side Hustles &nbsp;·&nbsp; <a href="https://digitstem.com/t/OGVQeG15eGN2bmttSUxsamQ3c296UT09-MzkyNDUz">Get The UMM Course</a></p>
        <p style={{ marginTop: '8px' }}>This page contains affiliate links. I earn a commission when you purchase through my link at no extra cost to you.</p>
      </footer>
    </>
  );
}
