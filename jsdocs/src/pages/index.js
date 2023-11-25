import React from "react";
import Layout from "@theme/Layout";

export default function Home() {
  return (
    <Layout title="Home" description="Home Page">
      <div class="hero-background-wrapper">
        <section class="hero-container container">
          <header class="hero-content-container">
            <div class="hero-header-container">
              <h1 class="hero-header">
                The Home of
                {/* <!-- --> */}
                <span class="hero-colored-text"> SecOpsDocs </span> for
              </h1>
            </div>
            <div class="hero-image-container">
              <img class="hero-image__logo" src="img/SecOps2.png" />
            </div>
          </header>
        </section>
      </div>
      <main>
        <section id="developer-docs-section" class="featuredContainer_cRXc">
          <div
            class="featured-container container"
            aria-label="Explore our Developer Docs"
          >
            <div class="featured-cards-container">
              <div class="featured-card-container cloud-native-security">
                <div class="featured-card-content">
                  <h2 class="featured-card-content__label">
                    Cybersecurity Fundamentals
                  </h2>
                  <div class="featured-card-content__section-divider"></div>
                  <p class="featured-card-content__description">
                    A comprehensive understanding of cybersecurity.
                  </p>
                  <div class="featured-card__products-container">
                    <div class="feature-card__left-column">
                      <div class="featured-card__product-container">
                        <h3 class="featured-card__product-group-label">
                          Cybersecurity Fundamentals
                        </h3>
                        <ul class="featured-card__product-list">
                          <li class="featured-card__product-list-item doc-icon">
                            <a
                              class="featured-card__product-link"
                              href="https://sec-ops-docs.vercel.app/docs/intro"
                            >
                              Configure TCP/IP && Virtual Router
                            </a>
                          </li>
                          <li class="featured-card__product-list-item doc-icon">
                            <a
                              class="featured-card__product-link"
                              href="https://sec-ops-docs.vercel.app/docs/intro"
                            >
                              Malware Analysis
                            </a>
                          </li>
                          <li class="featured-card__product-list-item doc-icon">
                            <a
                              class="featured-card__product-link"
                              href="https://sec-ops-docs.vercel.app/docs/intro"
                            >
                              Creating a Zero Trust Enviornment
                            </a>
                          </li>
                          <li class="featured-card__product-list-item doc-icon">
                            <a
                              class="featured-card__product-link"
                              href="https://sec-ops-docs.vercel.app/docs/intro"
                            >
                              Configuring Authentication
                            </a>
                          </li>
                          <li class="featured-card__product-list-item doc-icon">
                            <a
                              class="featured-card__product-link"
                              href="https://sec-ops-docs.vercel.app/docs/intro"
                            >
                              Using Two-Factor Authentication
                            </a>
                          </li>
                          <li class="featured-card__product-list-item doc-icon">
                            <a
                              class="featured-card__product-link"
                              href="https://sec-ops-docs.vercel.app/docs/intro"
                            >
                              Allowing Only Trusted Applications
                            </a>
                          </li>
                        </ul>
                      </div>
                    </div>
                    <div class="feature-card__left-column">
                      <div class="featured-card__product-container">
                        <h3 class="featured-card__product-group-label">
                          Network Security Fundamentals
                        </h3>
                        <ul class="featured-card__product-list">
                          <li class="featured-card__product-list-item doc-icon">
                            <a
                              class="featured-card__product-link"
                              href="https://sec-ops-docs.vercel.app/docs/intro"
                            >
                              Configuring DHCP
                            </a>
                          </li>
                          <li class="featured-card__product-list-item doc-icon">
                            <a
                              class="featured-card__product-link"
                              href="https://sec-ops-docs.vercel.app/docs/intro"
                            >
                              Configuring Virtual IP Addresses
                            </a>
                          </li>
                          <li class="featured-card__product-list-item doc-icon">
                            <a
                              class="featured-card__product-link"
                              href="https://sec-ops-docs.vercel.app/docs/intro"
                            >
                              Creating Packet Captures
                            </a>
                          </li>
                          <li class="featured-card__product-list-item doc-icon">
                            <a
                              class="featured-card__product-link"
                              href="https://sec-ops-docs.vercel.app/docs/intro"
                            >
                              Analyzing Packet Captures
                            </a>
                          </li>
                          <li class="featured-card__product-list-item doc-icon">
                            <a
                              class="featured-card__product-link"
                              href="https://sec-ops-docs.vercel.app/docs/intro"
                            >
                              Managing Certificates
                            </a>
                          </li>
                          <li class="featured-card__product-list-item doc-icon">
                            <a
                              class="featured-card__product-link"
                              href="https://sec-ops-docs.vercel.app/docs/intro"
                            >
                              Decrypting SSH Traffic
                            </a>
                          </li>
                          <li class="featured-card__product-list-item doc-icon">
                            <a
                              class="featured-card__product-link"
                              href="https://sec-ops-docs.vercel.app/docs/intro"
                            >
                              Decrypting SSL Inbound Traffic
                            </a>
                          </li>
                          <li class="featured-card__product-list-item doc-icon">
                            <a
                              class="featured-card__product-link"
                              href="https://sec-ops-docs.vercel.app/docs/intro"
                            >
                              Backing up Firewall Logs
                            </a>
                          </li>
                        </ul>
                      </div>
                    </div>
                    <div class="feature-card__left-column">
                      <div class="featured-card__product-container">
                        <h3 class="featured-card__product-group-label">
                          Cloud Security Fundamentals
                        </h3>
                        <ul class="featured-card__product-list">
                          <li class="featured-card__product-list-item doc-icon">
                            <a
                              class="featured-card__product-link"
                              href="https://sec-ops-docs.vercel.app/docs/intro"
                            >
                              Protecting Sensitive Data
                            </a>
                          </li>
                          <li class="featured-card__product-list-item doc-icon">
                            <a
                              class="featured-card__product-link"
                              href="https://sec-ops-docs.vercel.app/docs/intro"
                            >
                              Preventing Internet Threats w/ File Blocking
                            </a>
                          </li>
                          <li class="featured-card__product-list-item doc-icon">
                            <a
                              class="featured-card__product-link"
                              href="https://sec-ops-docs.vercel.app/docs/intro"
                            >
                              Container Network Security
                            </a>
                          </li>
                          <li class="featured-card__product-list-item doc-icon">
                            <a
                              class="featured-card__product-link"
                              href="https://sec-ops-docs.vercel.app/docs/intro"
                            >
                              Denying International Attackers
                            </a>
                          </li>
                          <li class="featured-card__product-list-item doc-icon">
                            <a
                              class="featured-card__product-link"
                              href="https://sec-ops-docs.vercel.app/docs/intro"
                            >
                              Configuring HIP for Global Protect
                            </a>
                          </li>
                          <li class="featured-card__product-list-item doc-icon">
                            <a
                              class="featured-card__product-link"
                              href="https://sec-ops-docs.vercel.app/docs/intro"
                            >
                              Container Vulnerability Scanning
                            </a>
                          </li>
                        </ul>
                      </div>
                    </div>
                    <div class="feature-card__right-column">
                      <div class="featured-card__product-container">
                        <h3 class="featured-card__product-group-label">
                          SecOps Center Fundamentals
                        </h3>
                        <ul class="featured-card__product-list">
                          <li class="featured-card__product-list-item doc-icon">
                            <a
                              class="featured-card__product-link"
                              href="https://sec-ops-docs.vercel.app/docs/intro"
                            >
                              Network Traffic Analysis
                            </a>
                          </li>
                          <li class="featured-card__product-list-item doc-icon">
                            <a
                              class="featured-card__product-link"
                              href="https://sec-ops-docs.vercel.app/docs/intro"
                            >
                              Application Command Center to Find Threats
                            </a>
                          </li>
                          <li class="featured-card__product-list-item doc-icon">
                            <a
                              class="featured-card__product-link"
                              href="https://sec-ops-docs.vercel.app/docs/intro"
                            >
                              Analyzing Firewall Logs
                            </a>
                          </li>
                          <li class="featured-card__product-list-item doc-icon">
                            <a
                              class="featured-card__product-link"
                              href="https://sec-ops-docs.vercel.app/docs/intro"
                            >
                              Log Forwarding to Linux
                            </a>
                          </li>
                          <li class="featured-card__product-list-item doc-icon">
                            <a
                              class="featured-card__product-link"
                              href="https://sec-ops-docs.vercel.app/docs/intro"
                            >
                              Stopping Reconnaissance Attacks
                            </a>
                          </li>
                          <li class="featured-card__product-list-item doc-icon">
                            <a
                              class="featured-card__product-link"
                              href="https://sec-ops-docs.vercel.app/docs/intro"
                            >
                              Securing Endpoint using Vulnerability Profiles
                            </a>
                          </li>
                          <li class="featured-card__product-list-item doc-icon">
                            <a
                              class="featured-card__product-link"
                              href="https://sec-ops-docs.vercel.app/docs/intro"
                            >
                              Threat Intelligence
                            </a>
                          </li>
                          <li class="featured-card__product-list-item doc-icon">
                            <a
                              class="featured-card__product-link"
                              href="https://sec-ops-docs.vercel.app/docs/intro"
                            >
                              Using Dynamic Block Lists
                            </a>
                          </li>
                          <li class="featured-card__product-list-item doc-icon">
                            <a
                              class="featured-card__product-link"
                              href="https://sec-ops-docs.vercel.app/docs/intro"
                            >
                              Endpoint Detection && Response
                            </a>
                          </li>
                          <li class="featured-card__product-list-item doc-icon">
                            <a
                              class="featured-card__product-link"
                              href="https://sec-ops-docs.vercel.app/docs/intro"
                            >
                              Threat Intelligence
                            </a>
                          </li>
                          <li class="featured-card__product-list-item doc-icon">
                            <a
                              class="featured-card__product-link"
                              href="https://sec-ops-docs.vercel.app/docs/intro"
                            >
                              Cortex Platform
                            </a>
                          </li>
                          <li class="featured-card__product-list-item doc-icon">
                            <a
                              class="featured-card__product-link"
                              href="https://sec-ops-docs.vercel.app/docs/intro"
                            >
                              Cortex XDR
                            </a>
                          </li>
                          <li class="featured-card__product-list-item doc-icon">
                            <a
                              class="featured-card__product-link"
                              href="https://sec-ops-docs.vercel.app/docs/intro"
                            >
                              Cortex XSOAR
                            </a>
                          </li>
                          <li class="featured-card__product-list-item doc-icon">
                            <a
                              class="featured-card__product-link"
                              href="https://sec-ops-docs.vercel.app/docs/intro"
                            >
                              Threat Intelligence Management (TIM)
                            </a>
                          </li>
                          <li class="featured-card__product-list-item doc-icon">
                            <a
                              class="featured-card__product-link"
                              href="https://sec-ops-docs.vercel.app/docs/intro"
                            >
                              Cortex XSIAM
                            </a>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div class="featured-card-container security-operations">
                <div class="featured-card-content">
                  <h2 class="featured-card-content__label">
                    Cloud Native Security
                  </h2>
                  <div class="featured-card-content__section-divider"></div>
                  <p class="featured-card-content__description">
                    Discover Prisma Cloud, Prisma Access, Prisma SaaS && Prisma
                    SD-WAN
                  </p>
                  <div class="featured-card__products-container">
                    <div class="feature-card__left-column">
                      <div class="featured-card__product-container">
                        <h3 class="featured-card__product-group-label">
                          Prisma Cloud
                        </h3>
                        <ul class="featured-card__product-list">
                          <li class="featured-card__product-list-item doc-icon">
                            <a
                              class="featured-card__product-link"
                              href="https://sec-ops-docs.vercel.app/docs/intro"
                            >
                              Cloud Security Posture Management (CSPM)
                            </a>
                          </li>
                          <li class="featured-card__product-list-item doc-icon">
                            <a
                              class="featured-card__product-link"
                              href="https://sec-ops-docs.vercel.app/docs/intro"
                            >
                              Cloud Workload Protection (CWP)
                            </a>
                          </li>
                          <li class="featured-card__product-list-item doc-icon">
                            <a
                              class="featured-card__product-link"
                              href="https://sec-ops-docs.vercel.app/docs/intro"
                            >
                              Cloud Network Security (CNS)
                            </a>
                          </li>
                          <li class="featured-card__product-list-item doc-icon">
                            <a
                              class="featured-card__product-link"
                              href="https://sec-ops-docs.vercel.app/docs/intro"
                            >
                              Cloud Security Posture Governance
                            </a>
                          </li>
                          <li class="featured-card__product-list-item doc-icon">
                            <a
                              class="featured-card__product-link"
                              href="https://sec-ops-docs.vercel.app/docs/intro"
                            >
                              Policy-as-Code
                            </a>
                          </li>
                          <li class="featured-card__product-list-item doc-icon">
                            <a
                              class="featured-card__product-link"
                              href="https://sec-ops-docs.vercel.app/docs/intro"
                            >
                              Identity and Access Management
                            </a>
                          </li>
                        </ul>
                      </div>
                      <div class="featured-card__product-container">
                        <h3 class="featured-card__product-group-label">
                          Prisma Access
                        </h3>
                        <ul class="featured-card__product-list">
                          <li class="featured-card__product-list-item doc-icon">
                            <a
                              class="featured-card__product-link"
                              href="https://sec-ops-docs.vercel.app/docs/intro"
                            >
                              Zero Trust Network Access (ZTNA)
                            </a>
                          </li>
                          <li class="featured-card__product-list-item doc-icon">
                            <a
                              class="featured-card__product-link"
                              href="https://sec-ops-docs.vercel.app/docs/intro"
                            >
                              Threat Prevention && URL Filtering
                            </a>
                          </li>
                          <li class="featured-card__product-list-item doc-icon">
                            <a
                              class="featured-card__product-link"
                              href="https://sec-ops-docs.vercel.app/docs/intro"
                            >
                              Application Performance Monitoring (APM)
                            </a>
                          </li>
                          <li class="featured-card__product-list-item doc-icon">
                            <a
                              class="featured-card__product-link"
                              href="https://sec-ops-docs.vercel.app/docs/intro"
                            >
                              Scalability & Deployment
                            </a>
                          </li>
                          <li class="featured-card__product-list-item doc-icon">
                            <a
                              class="featured-card__product-link"
                              href="https://sec-ops-docs.vercel.app/docs/intro"
                            >
                              Management && Integration w/ Prisma Suite
                            </a>
                          </li>
                        </ul>
                      </div>
                    </div>
                    <div class="feature-card__right-column">
                      <div class="featured-card__product-container">
                        <h3 class="featured-card__product-group-label">
                          Prisma SaaS
                        </h3>
                        <ul class="featured-card__product-list">
                          <li class="featured-card__product-list-item doc-icon">
                            <a
                              class="featured-card__product-link"
                              href="https://sec-ops-docs.vercel.app/docs/intro"
                            >
                              Application Discovery && Risk Assessment
                            </a>
                          </li>
                          <li class="featured-card__product-list-item doc-icon">
                            <a
                              class="featured-card__product-link"
                              href="https://sec-ops-docs.vercel.app/docs/intro"
                            >
                              Data Loss Prevention (DLP)
                            </a>
                          </li>
                          <li class="featured-card__product-list-item doc-icon">
                            <a
                              class="featured-card__product-link"
                              href="https://sec-ops-docs.vercel.app/docs/intro"
                            >
                              Threat Detection && Access Controls
                            </a>
                          </li>
                          <li class="featured-card__product-list-item doc-icon">
                            <a
                              class="featured-card__product-link"
                              href="https://sec-ops-docs.vercel.app/docs/intro"
                            >
                              Regulatory Compliance Monitoring & Reporting
                            </a>
                          </li>
                          <li class="featured-card__product-list-item doc-icon">
                            <a
                              class="featured-card__product-link"
                              href="https://sec-ops-docs.vercel.app/docs/intro"
                            >
                              Integration and Security Ecosystem
                            </a>
                          </li>
                        </ul>
                      </div>
                      <div class="featured-card__product-container">
                        <h3 class="featured-card__product-group-label">
                          Prisma SD-WAN
                        </h3>
                        <ul class="featured-card__product-list">
                          <li class="featured-card__product-list-item doc-icon">
                            <a
                              class="featured-card__product-link"
                              href="https://sec-ops-docs.vercel.app/docs/intro"
                            >
                              Secure and Optimized Connectivity
                            </a>
                          </li>
                          <li class="featured-card__product-list-item doc-icon">
                            <a
                              class="featured-card__product-link"
                              href="https://sec-ops-docs.vercel.app/docs/intro"
                            >
                              Unified Security and Networking
                            </a>
                          </li>
                          <li class="featured-card__product-list-item doc-icon">
                            <a
                              class="featured-card__product-link"
                              href="https://sec-ops-docs.vercel.app/docs/intro"
                            >
                              Application Performance and Quality of Service
                              (QoS)
                            </a>
                          </li>
                          <li class="featured-card__product-list-item doc-icon">
                            <a
                              class="featured-card__product-link"
                              href="https://sec-ops-docs.vercel.app/docs/intro"
                            >
                              Global Points of Presence (PoPs)
                            </a>
                          </li>
                          <li class="featured-card__product-list-item doc-icon">
                            <a
                              class="featured-card__product-link"
                              href="https://sec-ops-docs.vercel.app/docs/intro"
                            >
                              Orchestration and Automation
                            </a>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div class="featured-card-container network-security">
                <div class="featured-card-content">
                  <h2 class="featured-card-content__label">Network Security</h2>
                  <div class="featured-card-content__section-divider"></div>
                  <p class="featured-card-content__description">
                    Learn about all the network security features available.
                  </p>
                  <div class="featured-card__products-container">
                    <div class="feature-card__left-column">
                      <div class="featured-card__product-container">
                        <h3 class="featured-card__product-group-label">
                          Next-Gen Firewall NGFW
                        </h3>
                        <ul class="featured-card__product-list">
                          <li class="featured-card__product-list-item doc-icon">
                            <a
                              class="featured-card__product-link"
                              href="https://sec-ops-docs.vercel.app/docs/intro"
                            >
                              Application Control and Visibility
                            </a>
                          </li>
                          <li class="featured-card__product-list-item doc-icon">
                            <a
                              class="featured-card__product-link"
                              href="https://sec-ops-docs.vercel.app/docs/intro"
                            >
                              Threat Prevention && Intrusion
                              Detection/Prevention
                            </a>
                          </li>
                          <li class="featured-card__product-list-item doc-icon">
                            <a
                              class="featured-card__product-link"
                              href="https://sec-ops-docs.vercel.app/docs/intro"
                            >
                              URL Filtering and Content Inspection
                            </a>
                          </li>
                          <li class="featured-card__product-list-item doc-icon">
                            <a
                              class="featured-card__product-link"
                              href="https://sec-ops-docs.vercel.app/docs/intro"
                            >
                              SSL Decryption and Visibility
                            </a>
                          </li>
                          <li class="featured-card__product-list-item doc-icon">
                            <a
                              class="featured-card__product-link"
                              href="https://sec-ops-docs.vercel.app/docs/intro"
                            >
                              Network Segmentation and VPN Connectivity
                            </a>
                          </li>
                        </ul>
                      </div>
                      <div class="featured-card__product-container">
                        <h3 class="featured-card__product-group-label">
                          PAN-OS SD-WAN
                        </h3>
                        <ul class="featured-card__product-list">
                          <li class="featured-card__product-list-item doc-icon">
                            <a
                              class="featured-card__product-link"
                              href="https://sec-ops-docs.vercel.app/docs/intro"
                            >
                              Secure and Optimized Connectivity
                            </a>
                          </li>
                          <li class="featured-card__product-list-item doc-icon">
                            <a
                              class="featured-card__product-link"
                              href="https://sec-ops-docs.vercel.app/docs/intro"
                            >
                              Integrated Security Services
                            </a>
                          </li>
                          <li class="featured-card__product-list-item doc-icon">
                            <a
                              class="featured-card__product-link"
                              href="https://sec-ops-docs.vercel.app/docs/intro"
                            >
                              Global Network Optimization
                            </a>
                          </li>
                          <li class="featured-card__product-list-item doc-icon">
                            <a
                              class="featured-card__product-link"
                              href="https://sec-ops-docs.vercel.app/docs/intro"
                            >
                              Application Performance Monitoring
                            </a>
                          </li>
                          <li class="featured-card__product-list-item doc-icon">
                            <a
                              class="featured-card__product-link"
                              href="https://sec-ops-docs.vercel.app/docs/intro"
                            >
                              Centralized Management and Orchestration
                            </a>
                          </li>
                        </ul>
                      </div>
                      <div class="featured-card__product-container">
                        <h3 class="featured-card__product-group-label">
                          Panorama
                        </h3>
                        <ul class="featured-card__product-list">
                          <li class="featured-card__product-list-item doc-icon">
                            <a
                              class="featured-card__product-link"
                              href="https://sec-ops-docs.vercel.app/docs/intro"
                            >
                              Centralized Configuration and Management
                            </a>
                          </li>
                          <li class="featured-card__product-list-item doc-icon">
                            <a
                              class="featured-card__product-link"
                              href="https://sec-ops-docs.vercel.app/docs/intro"
                            >
                              Network Security Orchestration
                            </a>
                          </li>
                          <li class="featured-card__product-list-item doc-icon">
                            <a
                              class="featured-card__product-link"
                              href="https://sec-ops-docs.vercel.app/docs/intro"
                            >
                              Comprehensive Visibility and Reporting
                            </a>
                          </li>
                          <li class="featured-card__product-list-item doc-icon">
                            <a
                              class="featured-card__product-link"
                              href="https://sec-ops-docs.vercel.app/docs/intro"
                            >
                              Automation and Streamlined Operations
                            </a>
                          </li>
                          <li class="featured-card__product-list-item doc-icon">
                            <a
                              class="featured-card__product-link"
                              href="https://sec-ops-docs.vercel.app/docs/intro"
                            >
                              Scalability and Role-Based Access Control
                            </a>
                          </li>
                        </ul>
                      </div>
                    </div>
                    <div class="feature-card__right-column">
                      <div class="featured-card__product-container">
                        <h3 class="featured-card__product-group-label">
                          Advanced Threat Prevention
                        </h3>
                        <ul class="featured-card__product-list">
                          <li class="featured-card__product-list-item doc-icon">
                            <a
                              class="featured-card__product-link"
                              href="https://sec-ops-docs.vercel.app/docs/intro"
                            >
                              Malware and Exploit Prevention
                            </a>
                          </li>
                          <li class="featured-card__product-list-item doc-icon">
                            <a
                              class="featured-card__product-link"
                              href="https://sec-ops-docs.vercel.app/docs/intro"
                            >
                              Behavioral Analysis and Sandbox Inspection
                            </a>
                          </li>
                          <li class="featured-card__product-list-item doc-icon">
                            <a
                              class="featured-card__product-link"
                              href="https://sec-ops-docs.vercel.app/docs/intro"
                            >
                              URL and Content Filtering
                            </a>
                          </li>
                          <li class="featured-card__product-list-item doc-icon">
                            <a
                              class="featured-card__product-link"
                              href="https://sec-ops-docs.vercel.app/docs/intro"
                            >
                              Threat Intelligence and Cloud-Based Protection
                            </a>
                          </li>
                          <li class="featured-card__product-list-item doc-icon">
                            <a
                              class="featured-card__product-link"
                              href="https://sec-ops-docs.vercel.app/docs/intro"
                            >
                              Zero-Day Threat Detection and Response
                            </a>
                          </li>
                        </ul>
                      </div>
                      <div class="featured-card__product-container">
                        <h3 class="featured-card__product-group-label">
                          Advanced URL Filtering
                        </h3>
                        <ul class="featured-card__product-list">
                          <li class="featured-card__product-list-item doc-icon">
                            <a
                              class="featured-card__product-link"
                              href="https://sec-ops-docs.vercel.app/docs/intro"
                            >
                              URL Categorization and Granular Control
                            </a>
                          </li>
                          <li class="featured-card__product-list-item doc-icon">
                            <a
                              class="featured-card__product-link"
                              href="https://sec-ops-docs.vercel.app/docs/intro"
                            >
                              Threat Prevention and Phishing Protection
                            </a>
                          </li>
                          <li class="featured-card__product-list-item doc-icon">
                            <a
                              class="featured-card__product-link"
                              href="https://sec-ops-docs.vercel.app/docs/intro"
                            >
                              Customizable Content Filtering and Policies
                            </a>
                          </li>
                          <li class="featured-card__product-list-item doc-icon">
                            <a
                              class="featured-card__product-link"
                              href="https://sec-ops-docs.vercel.app/docs/intro"
                            >
                              SSL Decryption and Inspection
                            </a>
                          </li>
                          <li class="featured-card__product-list-item doc-icon">
                            <a
                              href="https://sec-ops-docs.vercel.app/docs/intro"
                              target="_blank"
                              rel="noopener noreferrer"
                              class="featured-card__product-link"
                            >
                              Reporting and Visibility
                            </a>
                          </li>
                        </ul>
                      </div>
                      <div class="featured-card__product-container">
                        <h3 class="featured-card__product-group-label">
                          IPSec VPN
                        </h3>
                        <ul class="featured-card__product-list">
                          <li class="featured-card__product-list-item doc-icon">
                            <a
                              class="featured-card__product-link"
                              href="https://sec-ops-docs.vercel.app/docs/intro"
                            >
                              Incident Management and Response
                            </a>
                          </li>
                          <li class="featured-card__product-list-item doc-icon">
                            <a
                              class="featured-card__product-link"
                              href="https://sec-ops-docs.vercel.app/docs/intro"
                            >
                              Secure Encrypted Tunnels
                            </a>
                          </li>
                          <li class="featured-card__product-list-item doc-icon">
                            <a
                              class="featured-card__product-link"
                              href="https://sec-ops-docs.vercel.app/docs/intro"
                            >
                              Remote Access and Site-to-Site Connectivity
                            </a>
                          </li>
                          <li class="featured-card__product-list-item doc-icon">
                            <a
                              class="featured-card__product-link"
                              href="https://sec-ops-docs.vercel.app/docs/intro"
                            >
                              Authentication and Access Control
                            </a>
                          </li>
                          <li class="featured-card__product-list-item doc-icon">
                            <a
                              class="featured-card__product-link"
                              href="https://sec-ops-docs.vercel.app/docs/intro"
                            >
                              VPN Tunnel Management and Monitoring
                            </a>
                          </li>
                          <li class="featured-card__product-list-item doc-icon">
                            <a
                              class="featured-card__product-link"
                              href="https://sec-ops-docs.vercel.app/docs/intro"
                            >
                              Scalability and Flexibility
                            </a>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div class="featured-card-container sase">
                <div class="featured-card-content">
                  <h2 class="featured-card-content__label">
                    Security Operations
                  </h2>
                  <div class="featured-card-content__section-divider"></div>
                  <p class="featured-card-content__description">
                    Discover Cortex XDR, Cortx XSOAR Threat IQ Management,
                    Cortex Xpanse && Cortex XSIAM.
                  </p>
                  <div class="featured-card__products-container">
                    <div class="feature-card__left-column">
                      <div class="featured-card__product-container">
                        <h3 class="featured-card__product-group-label">
                          Cortex XDR
                        </h3>
                        <ul class="featured-card__product-list">
                          <li class="featured-card__product-list-item doc-icon">
                            <a
                              class="featured-card__product-link"
                              href="https://sec-ops-docs.vercel.app/docs/intro"
                            >
                              Cross-Data Source Visibilty
                            </a>
                          </li>
                          <li class="featured-card__product-list-item doc-icon">
                            <a
                              class="featured-card__product-link"
                              href="https://sec-ops-docs.vercel.app/docs/intro"
                            >
                              Automated Threat Hunting
                            </a>
                          </li>
                          <li class="featured-card__product-list-item doc-icon">
                            <a
                              class="featured-card__product-link"
                              href="https://sec-ops-docs.vercel.app/docs/intro"
                            >
                              Automated Resonse Actions
                            </a>
                          </li>
                          <li class="featured-card__product-list-item doc-icon">
                            <a
                              class="featured-card__product-link"
                              href="https://sec-ops-docs.vercel.app/docs/intro"
                            >
                              Contextual Insights
                            </a>
                          </li>
                          <li class="featured-card__product-list-item doc-icon">
                            <a
                              href="https://sec-ops-docs.vercel.app/docs/intro"
                              target="_blank"
                              rel="noopener noreferrer"
                              class="featured-card__product-link"
                            >
                              Integration Capabilities
                            </a>
                          </li>
                        </ul>
                      </div>
                      <div class="featured-card__product-container">
                        <h3 class="featured-card__product-group-label">
                          Cortex XSOAR ( ThreatIQ TIM )
                        </h3>
                        <ul class="featured-card__product-list">
                          <li class="featured-card__product-list-item doc-icon">
                            <a
                              class="featured-card__product-link"
                              href="https://sec-ops-docs.vercel.app/docs/intro"
                            >
                              Playbook Automation w/ Marketplace
                            </a>
                          </li>
                          <li class="featured-card__product-list-item doc-icon">
                            <a
                              class="featured-card__product-link"
                              href="https://sec-ops-docs.vercel.app/docs/intro"
                            >
                              Centralized Incident & Case Management
                            </a>
                          </li>
                          <li class="featured-card__product-list-item doc-icon">
                            <a
                              class="featured-card__product-link"
                              href="https://sec-ops-docs.vercel.app/docs/intro"
                            >
                              Automated Threat Feeds
                            </a>
                          </li>
                          <li class="featured-card__product-list-item doc-icon">
                            <a
                              class="featured-card__product-link"
                              href="https://sec-ops-docs.vercel.app/docs/intro"
                            >
                              Continuous Integration && Delivery / Deployment
                            </a>
                          </li>
                          <li class="featured-card__product-list-item doc-icon">
                            <a
                              class="featured-card__product-link"
                              href="https://sec-ops-docs.vercel.app/docs/intro"
                            >
                              Performance Analytics
                            </a>
                          </li>
                          <li class="featured-card__product-list-item doc-icon">
                            <a
                              class="featured-card__product-link"
                              href="https://sec-ops-docs.vercel.app/docs/intro"
                            >
                              Audit Trails && Compliance
                            </a>
                          </li>
                        </ul>
                      </div>
                    </div>
                    <div class="feature-card__right-column">
                      <div class="featured-card__product-container">
                        <h3 class="featured-card__product-group-label">
                          Cortex Xpanse
                        </h3>
                        <ul class="featured-card__product-list">
                          <li class="featured-card__product-list-item doc-icon">
                            <a
                              class="featured-card__product-link"
                              href="https://sec-ops-docs.vercel.app/docs/intro"
                            >
                              Comprehensive Asset Discovery
                            </a>
                          </li>
                          <li class="featured-card__product-list-item doc-icon">
                            <a
                              class="featured-card__product-link"
                              href="https://sec-ops-docs.vercel.app/docs/intro"
                            >
                              Accurate Real-Time Inventory
                            </a>
                          </li>
                          <li class="featured-card__product-list-item doc-icon">
                            <a
                              class="featured-card__product-link"
                              href="https://sec-ops-docs.vercel.app/docs/intro"
                            >
                              Critical Risks Prioritization
                            </a>
                          </li>
                          <li class="featured-card__product-list-item doc-icon">
                            <a
                              class="featured-card__product-link"
                              href="https://sec-ops-docs.vercel.app/docs/intro"
                            >
                              Risk Scoring & Contextual Insights
                            </a>
                          </li>
                          <li class="featured-card__product-list-item doc-icon">
                            <a
                              class="featured-card__product-link"
                              href="https://sec-ops-docs.vercel.app/docs/intro"
                            >
                              Remediation Prioritization
                            </a>
                          </li>
                          <li class="featured-card__product-list-item doc-icon">
                            <a
                              class="featured-card__product-link"
                              href="https://sec-ops-docs.vercel.app/docs/intro"
                            >
                              Continuous Monitioring & Compliance Checks
                            </a>
                          </li>
                        </ul>
                      </div>
                      <div class="featured-card__product-container">
                        <h3 class="featured-card__product-group-label">
                          Cortex XSIAM
                        </h3>
                        <ul class="featured-card__product-list">
                          <li class="featured-card__product-list-item doc-icon">
                            <a
                              class="featured-card__product-link"
                              href="https://sec-ops-docs.vercel.app/docs/intro"
                            >
                              Incident Management and Response
                            </a>
                          </li>
                          <li class="featured-card__product-list-item doc-icon">
                            <a
                              class="featured-card__product-link"
                              href="https://sec-ops-docs.vercel.app/docs/intro"
                            >
                              Asset Discovery and Inventory
                            </a>
                          </li>
                          <li class="featured-card__product-list-item doc-icon">
                            <a
                              class="featured-card__product-link"
                              href="https://sec-ops-docs.vercel.app/docs/intro"
                            >
                              Threat Intelligence Integration
                            </a>
                          </li>
                          <li class="featured-card__product-list-item doc-icon">
                            <a
                              class="featured-card__product-link"
                              href="https://sec-ops-docs.vercel.app/docs/intro"
                            >
                              Reporting and Analytics
                            </a>
                          </li>
                          <li class="featured-card__product-list-item doc-icon">
                            <a
                              class="featured-card__product-link"
                              href="https://sec-ops-docs.vercel.app/docs/intro"
                            >
                              Collaboration and Workflow Integration
                            </a>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <button
            aria-label="Scroll back to top"
            class="clean-btn theme-back-to-top-button backToTopButton_sjWU"
            type="button"
          ></button>
        </section>
      </main>

      <footer class="footer">
        <div class="container container-fluid">
          <div class="footer__bottom text--center">
            <div class="margin-bottom--sm">
              <img
                src="/img/SecOps2.png"
                alt="SecOpsDocs For Security Architects"
              />
            </div>
            <div class="footer__copyright">
              Copyright © 2023 Security Architects SecOpsDocs.
            </div>
          </div>
        </div>
      </footer>
    </Layout>
  );
}
