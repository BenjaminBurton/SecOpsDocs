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
                              href="https://sec-ops-docs.vercel.app/docs/cybersecurity-fundamentals/configuring-tcp-ip"
                            >
                              Configure TCP/IP && Virtual Router
                            </a>
                          </li>
                          <li class="featured-card__product-list-item doc-icon">
                            <a
                              class="featured-card__product-link"
                              href="https://sec-ops-docs.vercel.app/docs/cybersecurity-fundamentals/malware-analysis"
                            >
                              Malware Analysis
                            </a>
                          </li>
                          <li class="featured-card__product-list-item doc-icon">
                            <a
                              class="featured-card__product-link"
                              href="https://sec-ops-docs.vercel.app/docs/cybersecurity-fundamentals/zero-trust"
                            >
                              Creating a Zero Trust Enviornment
                            </a>
                          </li>
                          <li class="featured-card__product-list-item doc-icon">
                            <a
                              class="featured-card__product-link"
                              href="https://sec-ops-docs.vercel.app/docs/cybersecurity-fundamentals/config-auth"
                            >
                              Configuring Authentication
                            </a>
                          </li>
                          <li class="featured-card__product-list-item doc-icon">
                            <a
                              class="featured-card__product-link"
                              href="https://sec-ops-docs.vercel.app/docs/cybersecurity-fundamentals/2FA-secure-firewall"
                            >
                              Using Two-Factor Authentication
                            </a>
                          </li>
                          <li class="featured-card__product-list-item doc-icon">
                            <a
                              class="featured-card__product-link"
                              href="https://sec-ops-docs.vercel.app/docs/cybersecurity-fundamentals/trusted-apps"
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
                              href="https://sec-ops-docs.vercel.app/docs/network-security/DHCP"
                            >
                              Configuring DHCP
                            </a>
                          </li>
                          <li class="featured-card__product-list-item doc-icon">
                            <a
                              class="featured-card__product-link"
                              href="https://sec-ops-docs.vercel.app/docs/network-security/config-virtual-ip"
                            >
                              Configuring Virtual IP Addresses
                            </a>
                          </li>
                          <li class="featured-card__product-list-item doc-icon">
                            <a
                              class="featured-card__product-link"
                              href="https://sec-ops-docs.vercel.app/docs/network-security/packet-captures"
                            >
                              Creating Packet Captures
                            </a>
                          </li>
                          <li class="featured-card__product-list-item doc-icon">
                            <a
                              class="featured-card__product-link"
                              href="https://sec-ops-docs.vercel.app/docs/network-security/analyzing-packets"
                            >
                              Analyzing Packet Captures
                            </a>
                          </li>
                          <li class="featured-card__product-list-item doc-icon">
                            <a
                              class="featured-card__product-link"
                              href="https://sec-ops-docs.vercel.app/docs/network-security/managing-certs"
                            >
                              Managing Certificates
                            </a>
                          </li>
                          <li class="featured-card__product-list-item doc-icon">
                            <a
                              class="featured-card__product-link"
                              href="https://sec-ops-docs.vercel.app/docs/network-security/decrypt-ssh-traffic"
                            >
                              Decrypting SSH Traffic
                            </a>
                          </li>
                          <li class="featured-card__product-list-item doc-icon">
                            <a
                              class="featured-card__product-link"
                              href="https://sec-ops-docs.vercel.app/docs/network-security/decrypt-in-SSL-Traffic"
                            >
                              Decrypting SSL Inbound Traffic
                            </a>
                          </li>
                          <li class="featured-card__product-list-item doc-icon">
                            <a
                              class="featured-card__product-link"
                              href="https://sec-ops-docs.vercel.app/docs/network-security/firewall-logs"
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
                              href="https://sec-ops-docs.vercel.app/docs/cloud-native-security/protect-sense-data"
                            >
                              Protecting Sensitive Data
                            </a>
                          </li>
                          <li class="featured-card__product-list-item doc-icon">
                            <a
                              class="featured-card__product-link"
                              href="https://sec-ops-docs.vercel.app/docs/cloud-native-security/prevnt-threat-file-blk"
                            >
                              Preventing Internet Threats w/ File Blocking
                            </a>
                          </li>
                          <li class="featured-card__product-list-item doc-icon">
                            <a
                              class="featured-card__product-link"
                              href="https://sec-ops-docs.vercel.app/docs/cloud-native-security/container-security"
                            >
                              Container Network Security
                            </a>
                          </li>
                          <li class="featured-card__product-list-item doc-icon">
                            <a
                              class="featured-card__product-link"
                              href="https://sec-ops-docs.vercel.app/docs/cloud-native-security/deny-intl-attackers"
                            >
                              Denying International Attackers
                            </a>
                          </li>
                          <li class="featured-card__product-list-item doc-icon">
                            <a
                              class="featured-card__product-link"
                              href="https://sec-ops-docs.vercel.app/docs/cloud-native-security/config-HIP"
                            >
                              Configuring HIP for Global Protect
                            </a>
                          </li>
                          <li class="featured-card__product-list-item doc-icon">
                            <a
                              class="featured-card__product-link"
                              href="https://sec-ops-docs.vercel.app/docs/cloud-native-security/container-scan"
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
                              href="https://sec-ops-docs.vercel.app/docs/security-operations/net-traffic-analysis"
                            >
                              Network Traffic Analysis
                            </a>
                          </li>
                          <li class="featured-card__product-list-item doc-icon">
                            <a
                              class="featured-card__product-link"
                              href="https://sec-ops-docs.vercel.app/docs/security-operations/app-comm-center"
                            >
                              Application Command Center to Find Threats
                            </a>
                          </li>
                          <li class="featured-card__product-list-item doc-icon">
                            <a
                              class="featured-card__product-link"
                              href="https://sec-ops-docs.vercel.app/docs/security-operations/analyze-firewall-logs"
                            >
                              Analyzing Firewall Logs
                            </a>
                          </li>
                          <li class="featured-card__product-list-item doc-icon">
                            <a
                              class="featured-card__product-link"
                              href="https://sec-ops-docs.vercel.app/docs/security-operations/log-forward-2-linux"
                            >
                              Log Forwarding to Linux
                            </a>
                          </li>
                          <li class="featured-card__product-list-item doc-icon">
                            <a
                              class="featured-card__product-link"
                              href="https://sec-ops-docs.vercel.app/docs/security-operations/stop-reconn-attks"
                            >
                              Stopping Reconnaissance Attacks
                            </a>
                          </li>
                          <li class="featured-card__product-list-item doc-icon">
                            <a
                              class="featured-card__product-link"
                              href="https://sec-ops-docs.vercel.app/docs/security-operations/secure-endpoints"
                            >
                              Securing Endpoint using Vulnerability Profiles
                            </a>
                          </li>
                          <li class="featured-card__product-list-item doc-icon">
                            <a
                              class="featured-card__product-link"
                              href="https://sec-ops-docs.vercel.app/docs/security-operations/threat-intelligence"
                            >
                              Threat Intelligence
                            </a>
                          </li>
                          <li class="featured-card__product-list-item doc-icon">
                            <a
                              class="featured-card__product-link"
                              href="https://sec-ops-docs.vercel.app/docs/security-operations/dynamic-block-list"
                            >
                              Using Dynamic Block Lists
                            </a>
                          </li>
                        </ul>
                      </div>
                    </div>
                    <div class="feature-card__left-column">
                      <div class="featured-card__product-container">
                        <h3 class="featured-card__product-group-label">
                          SASE Fundamentals
                        </h3>
                        <ul class="featured-card__product-list">
                          <li class="featured-card__product-list-item doc-icon">
                            <a
                              class="featured-card__product-link"
                              href="https://sec-ops-docs.vercel.app/docs/SASE-fundamentals/SASE-Zero-trust"
                            >
                              Creating a Zero Trust Environment
                            </a>
                          </li>
                          <li class="featured-card__product-list-item doc-icon">
                            <a
                              class="featured-card__product-link"
                              href="https://sec-ops-docs.vercel.app/docs/SASE-fundamentals/SASE-HIP-config"
                            >
                              Configure HIP for Global Protect
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
              <div class="featured-card-container cloud-native-security">
                <div class="featured-card-content">
                  <h2 class="featured-card-content__label">Virtualization</h2>
                  <div class="featured-card-content__section-divider"></div>
                  <p class="featured-card-content__description">
                    A comprehensive understanding of VMware Virtualization.
                  </p>
                  <div class="featured-card__products-container">
                    <div class="feature-card__left-column">
                      <div class="featured-card__product-container">
                        <h3 class="featured-card__product-group-label">
                          Virtualization
                        </h3>
                        <ul class="featured-card__product-list">
                          <li class="featured-card__product-list-item doc-icon">
                            <a class="featured-card__product-link" href="#">
                              Hardware && Software
                            </a>
                          </li>
                          <li class="featured-card__product-list-item doc-icon">
                            <a class="featured-card__product-link" href="#">
                              Virtual Machine
                            </a>
                          </li>
                        </ul>
                      </div>
                    </div>
                    <div class="feature-card__left-column">
                      <div class="featured-card__product-container">
                        <h3 class="featured-card__product-group-label">
                          Hypervisor
                        </h3>
                        <ul class="featured-card__product-list">
                          <li class="featured-card__product-list-item doc-icon">
                            <a class="featured-card__product-link" href="#">
                              Type 1
                            </a>
                          </li>
                          <li class="featured-card__product-list-item doc-icon">
                            <a class="featured-card__product-link" href="#">
                              Type 2
                            </a>
                          </li>
                          <li class="featured-card__product-list-item doc-icon">
                            <a class="featured-card__product-link" href="#">
                              Workstation
                            </a>
                          </li>
                          <li class="featured-card__product-list-item doc-icon">
                            <a class="featured-card__product-link" href="#">
                              Virtual Machine Files
                            </a>
                          </li>
                          <li class="featured-card__product-list-item doc-icon">
                            <a class="featured-card__product-link" href="#">
                              Snapshots
                            </a>
                          </li>
                        </ul>
                      </div>
                    </div>
                    <div class="feature-card__left-column">
                      <div class="featured-card__product-container">
                        <h3 class="featured-card__product-group-label">
                          Data Center
                        </h3>
                        <ul class="featured-card__product-list">
                          <li class="featured-card__product-list-item doc-icon">
                            <a class="featured-card__product-link" href="#">
                              Compute Systems
                            </a>
                          </li>
                          <li class="featured-card__product-list-item doc-icon">
                            <a class="featured-card__product-link" href="#">
                              Networks
                            </a>
                          </li>
                          <li class="featured-card__product-list-item doc-icon">
                            <a class="featured-card__product-link" href="#">
                              Storage
                            </a>
                          </li>
                          <li class="featured-card__product-list-item doc-icon">
                            <a class="featured-card__product-link" href="#">
                              RAID Redundant Array of Independent Disks
                            </a>
                          </li>
                          <li class="featured-card__product-list-item doc-icon">
                            <a class="featured-card__product-link" href="#">
                              File && Block Level Storage
                            </a>
                          </li>
                          <li class="featured-card__product-list-item doc-icon">
                            <a class="featured-card__product-link" href="#">
                              DAS Direct Attached Storage
                            </a>
                          </li>
                          <li class="featured-card__product-list-item doc-icon">
                            <a class="featured-card__product-link" href="#">
                              NAS Network Attached Storage
                            </a>
                          </li>
                          <li class="featured-card__product-list-item doc-icon">
                            <a class="featured-card__product-link" href="#">
                              SAN Storage Area Network
                            </a>
                          </li>
                          <li class="featured-card__product-list-item doc-icon">
                            <a class="featured-card__product-link" href="#">
                              Storage Protocols
                            </a>
                          </li>
                          <li class="featured-card__product-list-item doc-icon">
                            <a class="featured-card__product-link" href="#">
                              Storage Provisioning
                            </a>
                          </li>
                        </ul>
                      </div>
                    </div>
                    <div class="feature-card__left-column">
                      <div class="featured-card__product-container">
                        <h3 class="featured-card__product-group-label">
                          Virtual Data Center
                        </h3>
                        <ul class="featured-card__product-list">
                          <li class="featured-card__product-list-item doc-icon">
                            <a class="featured-card__product-link" href="#">
                              vSphere
                            </a>
                          </li>
                          <li class="featured-card__product-list-item doc-icon">
                            <a class="featured-card__product-link" href="#">
                              ESXi
                            </a>
                          </li>
                          <li class="featured-card__product-list-item doc-icon">
                            <a class="featured-card__product-link" href="#">
                              vCenter
                            </a>
                          </li>
                          <li class="featured-card__product-list-item doc-icon">
                            <a class="featured-card__product-link" href="#">
                              vSphere Host Client
                            </a>
                          </li>
                          <li class="featured-card__product-list-item doc-icon">
                            <a class="featured-card__product-link" href="#">
                              vSphere Client
                            </a>
                          </li>
                          <li class="featured-card__product-list-item doc-icon">
                            <a class="featured-card__product-link" href="#">
                              Server Virtualization
                            </a>
                          </li>
                          <li class="featured-card__product-list-item doc-icon">
                            <a class="featured-card__product-link" href="#">
                              Storage Virtualization
                            </a>
                          </li>
                          <li class="featured-card__product-list-item doc-icon">
                            <a class="featured-card__product-link" href="#">
                              Network Virtualization
                            </a>
                          </li>
                          <li class="featured-card__product-list-item doc-icon">
                            <a class="featured-card__product-link" href="#">
                              Virtual Network Types
                            </a>
                          </li>
                          <li class="featured-card__product-list-item doc-icon">
                            <a class="featured-card__product-link" href="#">
                              Application && Desktop Virtualization
                            </a>
                          </li>
                          <li class="featured-card__product-list-item doc-icon">
                            <a class="featured-card__product-link" href="#">
                              Convergence Physical to Virtual
                            </a>
                          </li>
                        </ul>
                      </div>
                    </div>
                    <div class="feature-card__right-column">
                      <div class="featured-card__product-container">
                        <h3 class="featured-card__product-group-label">
                          Cloud Virtualization
                        </h3>
                        <ul class="featured-card__product-list">
                          <li class="featured-card__product-list-item doc-icon">
                            <a class="featured-card__product-link" href="#">
                              Cloud Computing Types
                            </a>
                          </li>
                          <li class="featured-card__product-list-item doc-icon">
                            <a class="featured-card__product-link" href="#">
                              SaaS Software as a Service
                            </a>
                          </li>
                          <li class="featured-card__product-list-item doc-icon">
                            <a class="featured-card__product-link" href="#">
                              PaaS Platform as a Service
                            </a>
                          </li>
                          <li class="featured-card__product-list-item doc-icon">
                            <a class="featured-card__product-link" href="#">
                              IaaS Infrastructure as a Service
                            </a>
                          </li>
                          <li class="featured-card__product-list-item doc-icon">
                            <a class="featured-card__product-link" href="#">
                              Cloud Deployment Models
                            </a>
                          </li>
                          <li class="featured-card__product-list-item doc-icon">
                            <a class="featured-card__product-link" href="#">
                              Private && Community Clouds
                            </a>
                          </li>
                          <li class="featured-card__product-list-item doc-icon">
                            <a class="featured-card__product-link" href="#">
                              Public Clouds
                            </a>
                          </li>
                          <li class="featured-card__product-list-item doc-icon">
                            <a class="featured-card__product-link" href="#">
                              Hybrid Clouds
                            </a>
                          </li>
                        </ul>
                      </div>
                    </div>
                    <div class="feature-card__left-column">
                      <div class="featured-card__product-container">
                        <h3 class="featured-card__product-group-label">
                          Container Technology
                        </h3>
                        <ul class="featured-card__product-list">
                          <li class="featured-card__product-list-item doc-icon">
                            <a class="featured-card__product-link" href="#">
                              Kubernetes
                            </a>
                          </li>
                          <li class="featured-card__product-list-item doc-icon">
                            <a class="featured-card__product-link" href="#">
                              Containers in the Cloud
                            </a>
                          </li>
                          <li class="featured-card__product-list-item doc-icon">
                            <a class="featured-card__product-link" href="#">
                              Container Security
                            </a>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div class="featured-card-container cloud-native-security">
                <div class="featured-card-content">
                  <h2 class="featured-card-content__label">Automation</h2>
                  <div class="featured-card-content__section-divider"></div>
                  <p class="featured-card-content__description">
                    A comprehensive understanding of Ansible Automation.
                  </p>
                  <div class="featured-card__products-container">
                    <div class="feature-card__left-column">
                      <div class="featured-card__product-container">
                        <h3 class="featured-card__product-group-label">
                          Intro
                        </h3>
                        <ul class="featured-card__product-list">
                          <li class="featured-card__product-list-item doc-icon">
                            <a class="featured-card__product-link" href="#">
                              Ansible Navigator
                            </a>
                          </li>
                          <li class="featured-card__product-list-item doc-icon">
                            <a class="featured-card__product-link" href="#">
                              Private Automation Hub
                            </a>
                          </li>
                          <li class="featured-card__product-list-item doc-icon">
                            <a class="featured-card__product-link" href="#">
                              Automation Controller
                            </a>
                          </li>
                          <li class="featured-card__product-list-item doc-icon">
                            <a class="featured-card__product-link" href="#">
                              DevOps && CI/CD w/ Automation Controller
                            </a>
                          </li>
                          <li class="featured-card__product-list-item doc-icon">
                            <a class="featured-card__product-link" href="#">
                              Automation on OpenShift
                            </a>
                          </li>
                          <li class="featured-card__product-list-item doc-icon">
                            <a class="featured-card__product-link" href="#">
                              Ansible-Builder
                            </a>
                          </li>
                          <li class="featured-card__product-list-item doc-icon">
                            <a class="featured-card__product-link" href="#">
                              Initial Playbook
                            </a>
                          </li>
                          <li class="featured-card__product-list-item doc-icon">
                            <a class="featured-card__product-link" href="#">
                              User Access && Content Policies
                            </a>
                          </li>
                          <li class="featured-card__product-list-item doc-icon">
                            <a class="featured-card__product-link" href="#">
                              Automation Mesh
                            </a>
                          </li>
                          <li class="featured-card__product-list-item doc-icon">
                            <a class="featured-card__product-link" href="#">
                              ServiceNow Automation
                            </a>
                          </li>
                          <li class="featured-card__product-list-item doc-icon">
                            <a class="featured-card__product-link" href="#">
                              Sign && Verify Projects
                            </a>
                          </li>
                          <li class="featured-card__product-list-item doc-icon">
                            <a class="featured-card__product-link" href="#">
                              DOD Automated Compliance
                            </a>
                          </li>
                          <li class="featured-card__product-list-item doc-icon">
                            <a class="featured-card__product-link" href="#">
                              Lightspeed w/ IBM WatsonX
                            </a>
                          </li>
                        </ul>
                      </div>
                    </div>
                    <div class="feature-card__left-column">
                      <div class="featured-card__product-container">
                        <h3 class="featured-card__product-group-label">
                          Event-Driven Ansible
                        </h3>
                        <ul class="featured-card__product-list">
                          <li class="featured-card__product-list-item doc-icon">
                            <a class="featured-card__product-link" href="#">
                              Rulebooks
                            </a>
                          </li>
                          <li class="featured-card__product-list-item doc-icon">
                            <a class="featured-card__product-link" href="#">
                              GitOps
                            </a>
                          </li>
                        </ul>
                      </div>
                    </div>
                    <div class="feature-card__right-column">
                      <div class="featured-card__product-container">
                        <h3 class="featured-card__product-group-label">
                          Network && Edge
                        </h3>
                        <ul class="featured-card__product-list">
                          <li class="featured-card__product-list-item doc-icon">
                            <a class="featured-card__product-link" href="#">
                              Backup && Restore
                            </a>
                          </li>
                          <li class="featured-card__product-list-item doc-icon">
                            <a class="featured-card__product-link" href="#">
                              Resource Modules
                            </a>
                          </li>
                          <li class="featured-card__product-list-item doc-icon">
                            <a class="featured-card__product-link" href="#">
                              Facts
                            </a>
                          </li>
                          <li class="featured-card__product-list-item doc-icon">
                            <a class="featured-card__product-link" href="#">
                              Infrastructure Awareness
                            </a>
                          </li>
                          <li class="featured-card__product-list-item doc-icon">
                            <a class="featured-card__product-link" href="#">
                              Surveys
                            </a>
                          </li>
                          <li class="featured-card__product-list-item doc-icon">
                            <a class="featured-card__product-link" href="#">
                              Playbook
                            </a>
                          </li>
                          <li class="featured-card__product-list-item doc-icon">
                            <a class="featured-card__product-link" href="#">
                              Platform && Edge
                            </a>
                          </li>
                          <li class="featured-card__product-list-item doc-icon">
                            <a class="featured-card__product-link" href="#">
                              Network Administrators
                            </a>
                          </li>
                          <li class="featured-card__product-list-item doc-icon">
                            <a class="featured-card__product-link" href="#">
                              Palo Alto Firewalls w/ AAP
                            </a>
                          </li>
                          <li class="featured-card__product-list-item doc-icon">
                            <a class="featured-card__product-link" href="#">
                              Network Validated Content
                            </a>
                          </li>
                          <li class="featured-card__product-list-item doc-icon">
                            <a class="featured-card__product-link" href="#">
                              Create && Execute Playbook
                            </a>
                          </li>
                        </ul>
                      </div>
                    </div>
                    <div class="feature-card__right-column">
                      <div class="featured-card__product-container">
                        <h3 class="featured-card__product-group-label">
                          Hybrid Cloud
                        </h3>
                        <ul class="featured-card__product-list">
                          <li class="featured-card__product-list-item doc-icon">
                            <a class="featured-card__product-link" href="#">
                              Microsoft Azure
                            </a>
                          </li>
                          <li class="featured-card__product-list-item doc-icon">
                            <a class="featured-card__product-link" href="#">
                              Infrastructure Visibility AWS
                            </a>
                          </li>
                          <li class="featured-card__product-list-item doc-icon">
                            <a class="featured-card__product-link" href="#">
                              Cloud Operations AWS
                            </a>
                          </li>
                          <li class="featured-card__product-list-item doc-icon">
                            <a class="featured-card__product-link" href="#">
                              Infrastructure Optimization AWS
                            </a>
                          </li>
                          <li class="featured-card__product-list-item doc-icon">
                            <a class="featured-card__product-link" href="#">
                              Terraform
                            </a>
                          </li>
                          <li class="featured-card__product-list-item doc-icon">
                            <a class="featured-card__product-link" href="#">
                              Infrastructure Visibility Azure
                            </a>
                          </li>
                          <li class="featured-card__product-list-item doc-icon">
                            <a class="featured-card__product-link" href="#">
                              Cloud Operations Azure
                            </a>
                          </li>
                          <li class="featured-card__product-list-item doc-icon">
                            <a class="featured-card__product-link" href="#">
                              Infrastructure Optimization Azure
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
