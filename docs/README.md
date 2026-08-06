<div align="center">

<img src="/docs/assets/images/ssl-reminder-logo.png" alt="SSL Reminder Logo" width="120">

# SSL Reminder

**Never Miss an SSL Certificate Expiry**  
**不要再错过 SSL 证书到期**

A lightweight iPhone app for public SSL/TLS certificate expiry monitoring, daily cloud checks, and push reminders.

一款专注公开 SSL/TLS 证书到期监控、每日云端检测和 iPhone 推送提醒的轻量应用。

<br>

[![App Store](https://img.shields.io/badge/App_Store-Download-0D96F6?logo=apple&logoColor=white)](https://apps.apple.com/us/app/ssl-reminder/id6786519365)
[![Website](https://img.shields.io/badge/Website-ssl.opshome.run-168B59)](https://ssl.opshome.run)
[![Platform](https://img.shields.io/badge/Platform-iPhone-lightgrey?logo=apple)](https://apps.apple.com/us/app/ssl-reminder/id6786519365)
[![Price](https://img.shields.io/badge/Price-Free-success)](https://apps.apple.com/us/app/ssl-reminder/id6786519365)

<br>

[English](#english) · [简体中文](#简体中文) · [Privacy](https://ssl.opshome.run/privacy/) · [Support](https://ssl.opshome.run/support/)

<br>

<img src="/docs/assets/images/ssl-reminder-hero-0492-520.webp" alt="SSL Reminder iPhone app showing certificate health and expiry status" width="300">

</div>

---

## English

### Overview

**SSL Reminder** is a focused iPhone app for developers, webmasters, indie makers, and homelab users who want reliable SSL/TLS certificate expiry reminders without setting up a large monitoring platform.

Add your public certificate targets, let the cloud service check them every day, and receive iPhone push notifications before certificates expire or when checks fail.

### Highlights

| Capability | Description |
| --- | --- |
| **15 certificates free** | Monitor up to 15 public SSL/TLS certificate targets without creating an account. |
| **Daily cloud checks** | Certificate status and expiry information are refreshed every day. |
| **Expiry reminders** | Receive alerts 14 days, 7 days, 1 day, and on the expiry date. |
| **Failure alerts** | Get notified when certificate checks fail. |
| **Certificate details** | View expiry date, days remaining, issuer, subject, and current status. |
| **Certificate Health Report** | Quickly identify healthy, expiring, critical, expired, and failed targets. |
| **No account required** | Start monitoring without registration or sign-in. |
| **No ads** | A simple experience focused on certificate expiry awareness. |

### How It Works

1. **Add a certificate target**  
   Enter the public HTTPS domain and port you want to monitor.

2. **Daily cloud checks run automatically**  
   SSL Reminder retrieves the public certificate status and updates its latest expiry information.

3. **Receive iPhone notifications**  
   The app sends reminders before expiry and alerts when supported checks fail.

4. **Review certificate health**  
   Open the app to view certificate details, status summaries, and priority issues.

### Certificate Information

For each monitored target, SSL Reminder can display:

- Certificate status
- Expiry date
- Days remaining
- Certificate issuer
- Certificate subject
- Latest check state
- Priority and health classification

### Certificate Health Report

The built-in Certificate Health Report provides a compact overview of your submitted certificate targets, including:

- Healthy certificates
- Certificates expiring within 30 days
- Critical certificates expiring within 7 days
- Expired certificates
- Failed checks
- Priority issues that should be reviewed first

SSL Reminder keeps this report intentionally simple. It is designed for certificate expiry awareness rather than full infrastructure monitoring.

### Who It Is For

SSL Reminder is suitable for:

- Developers maintaining websites and APIs
- Webmasters managing several domains
- Indie developers operating small online services
- Homelab users with publicly reachable HTTPS services
- Anyone who wants simple certificate renewal reminders on iPhone

### Privacy-First Design

SSL Reminder is designed to collect only the information required to provide cloud certificate checks and alerts.

When cloud monitoring is enabled, the service may process:

- Certificate targets you add, including host and port
- An anonymous device identifier
- Apple push notification token
- Certificate status summaries
- Temporary detailed check records

SSL Reminder does **not** collect:

- Server passwords
- Certificate private keys
- DNS credentials
- Website content
- Personal identity information for account registration

Detailed check records are retained for 48 hours. After that, only the latest status summary and latest successful check summary are retained. Cloud data can be deleted from within the app.

Read the complete [Privacy Policy](https://ssl.opshome.run/privacy/).

### Monitoring Scope and Limitations

SSL Reminder cloud monitoring is intended for **public SSL/TLS certificates**.

Private LAN, VPN-only, NAS, Proxmox, router, internal dashboard, or other non-public targets may not be reachable from the cloud checker and are not suitable for long-term monitoring in SSL Reminder.

SSL Reminder does not replace:

- Your certificate authority
- Server or reverse-proxy configuration
- Certificate renewal automation
- A complete production monitoring platform

### Need More Than Certificate Expiry Reminders?

For broader infrastructure monitoring, use **OpsHome NOC**.

OpsHome NOC provides visibility for:

- Website and service uptime
- Public and private HTTP/HTTPS/TCP services
- Docker Probe
- Synology NAS
- Proxmox VE
- Linux hosts
- Docker hosts and containers
- Alerts, events, history, and NOC-style health views

[Learn about OpsHome NOC](https://app.opshome.run) · [Visit OpsHome](https://opshome.run)

### App Availability

SSL Reminder is available free on the App Store and is designed for iPhone.

[Download SSL Reminder on the App Store](https://apps.apple.com/us/app/ssl-reminder/id6786519365)

### Support

For support, privacy questions, or troubleshooting:

- Visit the [SSL Reminder Support page](https://ssl.opshome.run/support/)
- Include the app version, iOS version, and a short description of the issue
- Do not send private keys, passwords, or sensitive server credentials

---

## 简体中文

### 产品介绍

**SSL Reminder** 是一款专注 SSL/TLS 证书到期提醒的 iPhone 应用，适合开发者、站长、独立开发者和 Homelab 用户。

添加公开证书目标后，云端服务会每天检测证书状态，并在证书即将到期或检测失败时发送 iPhone 推送通知，无需部署复杂的完整监控平台。

### 核心功能

| 功能 | 说明 |
| --- | --- |
| **免费监控 15 个证书** | 无需创建账号即可监控最多 15 个公开 SSL/TLS 证书目标。 |
| **每日云端检测** | 每天更新证书状态和到期信息。 |
| **到期提醒** | 支持提前 14 天、7 天、1 天以及到期当天提醒。 |
| **检测失败提醒** | 证书检测失败时发送通知。 |
| **证书详情** | 查看到期日期、剩余天数、签发者、主题和当前状态。 |
| **证书健康报告** | 快速识别健康、即将到期、严重风险、已过期和检测失败的证书。 |
| **无需注册** | 不需要创建账号或登录即可开始使用。 |
| **无广告** | 专注证书到期提醒，不加入无关功能。 |

### 工作方式

1. **添加证书目标**  
   输入需要监控的公开 HTTPS 域名和端口。

2. **每日执行云端检测**  
   SSL Reminder 获取公开证书状态，并更新最新的到期信息。

3. **接收 iPhone 推送**  
   证书临近到期或支持的检测发生失败时，应用发送提醒。

4. **查看证书健康状态**  
   随时打开应用查看证书详情、状态摘要和优先处理问题。

### 可查看的证书信息

每个监控目标可以显示：

- 证书状态
- 到期日期
- 剩余天数
- 证书签发者
- 证书主题
- 最近检测状态
- 风险级别和健康分类

### 证书健康报告

内置的证书健康报告会汇总已添加的证书目标，包括：

- 健康证书
- 30 天内到期的证书
- 7 天内到期的严重风险证书
- 已过期证书
- 检测失败目标
- 应优先处理的问题

SSL Reminder 有意保持报告简单清晰。它专注于证书到期风险，而不是完整基础设施监控。

### 适合人群

SSL Reminder 适合：

- 维护网站和 API 的开发者
- 管理多个域名的站长
- 运营小型在线服务的独立开发者
- 管理公开 HTTPS 服务的 Homelab 用户
- 希望在 iPhone 上获得证书续期提醒的用户

### 隐私优先设计

SSL Reminder 只处理提供云端证书检测和推送提醒所需的信息。

启用云端监控后，服务可能处理：

- 用户添加的证书目标，包括主机和端口
- 匿名设备标识符
- Apple 推送通知令牌
- 证书状态摘要
- 临时详细检测记录

SSL Reminder **不会收集**：

- 服务器密码
- 证书私钥
- DNS 凭据
- 网站内容
- 用于账号注册的个人身份信息

详细检测记录保留 48 小时，之后仅保留最新状态摘要和最近一次成功检测摘要。用户可以随时在应用中删除云端数据。

查看完整的[隐私政策](https://ssl.opshome.run/privacy/)。

### 监控范围与限制

SSL Reminder 的云端监控面向**公开 SSL/TLS 证书**。

局域网、仅 VPN 可访问、NAS、Proxmox、路由器、内部管理面板或其他非公开目标，可能无法被云端检测服务访问，因此不适合使用 SSL Reminder 进行长期云端监控。

SSL Reminder 不能替代：

- 证书颁发机构
- 服务器或反向代理配置
- 证书自动续期系统
- 完整的生产环境监控平台

### 需要更完整的基础设施监控？

需要更广泛的监控能力时，可以使用 **OpsHome NOC**。

OpsHome NOC 支持：

- 网站和服务可用性
- 公网和私有 HTTP、HTTPS、TCP 服务
- Docker Probe
- Synology NAS
- Proxmox VE
- Linux 主机
- Docker 主机和容器
- 告警、事件、历史记录和 NOC 风格健康视图

[了解 OpsHome NOC](https://app.opshome.run) · [访问 OpsHome](https://opshome.run)

### App Store

SSL Reminder 可在 App Store 免费下载，并针对 iPhone 设计。

[在 App Store 下载 SSL Reminder](https://apps.apple.com/us/app/ssl-reminder/id6786519365)

### 支持

如需产品支持、隐私咨询或问题排查：

- 访问 [SSL Reminder 支持页面](https://ssl.opshome.run/support/)
- 提供应用版本、iOS 版本和简短的问题描述
- 请勿发送证书私钥、密码或敏感服务器凭据

---


**Free. Simple. Reliable.**  
**免费、简单、可靠。**

[Website](https://ssl.opshome.run) · [App Store](https://apps.apple.com/us/app/ssl-reminder/id6786519365) · [Privacy](https://ssl.opshome.run/privacy/) · [Support](https://ssl.opshome.run/support/)

<br>

© 2026 OpsHome™. All rights reserved.

</div>
