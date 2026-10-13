<div align="center">

<img src="docs/assets/images/ssl-logo-20261013.webp" alt="SSL Certificate Monitor logo" width="120">

# SSL Certificate Monitor

**Certificate expiry, under control.**  
**最近到期的证书，一眼可见。**

SSL/TLS certificate monitoring for iPhone and iPad, with daily cloud checks, expiry alerts and certificate chain analysis.

面向 iPhone 与 iPad 的 SSL/TLS 证书监控工具，支持每日云端检测、到期提醒与证书链解析。

[![App Store](https://img.shields.io/badge/App_Store-Download-0D96F6?logo=apple&logoColor=white)](https://apps.apple.com/us/app/ssl-reminder/id6786519365)
[![Website](https://img.shields.io/badge/Website-ssl.opshome.run-168B59)](https://ssl.opshome.run/)
[![Platform](https://img.shields.io/badge/Platform-iPhone_%26_iPad-lightgrey?logo=apple)](https://apps.apple.com/us/app/ssl-reminder/id6786519365)
[![Free to start](https://img.shields.io/badge/Free_to_start-3_certificate_targets-success)](https://apps.apple.com/us/app/ssl-reminder/id6786519365)

[English](#english) · [简体中文](#简体中文) · [Privacy](https://ssl.opshome.run/privacy/) · [Support](https://ssl.opshome.run/support/)

<img src="docs/assets/images/ssl-home-iphone.webp" alt="Nearest certificate expiry, domain and issuer on iPhone" width="260">
<img src="docs/assets/images/ssl-chain-ipad.webp" alt="Certificate trust chain and SAN details on iPad" width="400">

</div>

---

## English

### Overview

**SSL Certificate Monitor** helps developers, webmasters, indie makers and homelab users monitor publicly reachable SSL/TLS certificates.

The homepage puts the nearest expiry first: a large countdown, the domain and its certificate issuer. Daily cloud checks and iPhone push notifications help you track renewal risk, while X.509 chain details, SAN matching and TLS connection information provide evidence for troubleshooting.


### Certificate Analysis

Certificate details can include:

- Expiry date, remaining days, issuer, subject and latest check time
- Available root, intermediate and leaf certificate information
- SHA-256 fingerprint and certificate serial number
- Public key algorithm and length, and certificate signature algorithm
- SAN protected names with exact or wildcard hostname matching
- Negotiated TLS protocol and cipher suite
- Trust results, hostname mismatch, self-signed certificates and supported check failures

**Name matching, expiry and trust are evaluated separately.** A SAN match does not by itself establish that a certificate is trusted, current or secure. Chain details depend on the evidence available from the endpoint.

The health overview distinguishes normal certificates, certificates approaching expiry, expired certificates and failed checks. PDF report conclusions reflect the available evidence; incomplete or outdated information should not be treated as a complete security assessment.

### Free Allowance and Capacity Upgrades

| Option | Certificate capacity |
| --- | ---: |
| New users | 3 free targets |
| Capacity packs | Add +2, +10, +50, +100 or +500 slots |

Capacity packs are **one-time, non-consumable in-app purchases**, with no recurring subscription. Each pack can be purchased once, and different packs can be combined. Analysis features are included for everyone; purchases increase monitoring capacity.

Current prices appear in the app and may vary by App Store region. Purchases support restoration. Moving cloud monitoring to another device uses the in-app transfer flow, with activation moving to the receiving device.

### Privacy

Public certificate monitoring does not require server passwords, DNS credentials or certificate private keys.

When cloud monitoring is enabled, the service processes the information needed for checks and notifications, including target host and port, an anonymous device identifier, Apple push notification token, certificate status summaries and temporary detailed check records.

Detailed check records are retained for **48 hours**. After that, only the latest status summary and latest successful check summary are retained. You can delete cloud monitoring data from within the app.

Read the complete [Privacy Policy](https://ssl.opshome.run/privacy/).

For broader uptime, private network, Docker Probe, Synology, Proxmox, VMware, Linux host, container and incident monitoring, see [OpsHome NOC](https://app.opshome.run/).

### Download and Support

[Download on the App Store](https://apps.apple.com/us/app/ssl-reminder/id6786519365) · [Product website](https://ssl.opshome.run/) · [Support](https://ssl.opshome.run/support/)

For troubleshooting, email [support@opshome.run](mailto:support@opshome.run) with the app version, iOS/iPadOS version and a short description of the issue. Do not send private keys, passwords or sensitive server credentials.

---

## 简体中文

### 产品介绍

**SSL Certificate Monitor** 帮助开发者、站长、独立开发者和 Homelab 用户监控公网可达的 SSL/TLS 证书。

首页优先展示最近到期证书的大数字倒计时、域名和签发商。每日云端检测与 iPhone 推送持续跟踪续期风险，X.509 证书链、SAN 匹配和 TLS 连接信息则为问题排查提供依据。




### 证书分析

证书详情可包括：

- 到期日期、剩余天数、签发商、证书主题与最近检测时间
- 可用的根证书、中间证书和站点证书信息
- SHA-256 指纹与证书序列号
- 公钥算法、密钥长度与签名算法
- SAN 保护名称及精确、通配符域名匹配
- 握手协商的 TLS 协议和密码套件
- 信任结果、域名不匹配、自签名证书和支持的检测失败

**名称匹配、到期状态和证书信任分别评估。** SAN 匹配本身不代表证书可信、未过期或安全。证书链详情取决于服务端可获取的证据。

健康概览区分正常、临近到期、已过期和检测失败的证书。PDF 结论基于现有检测证据，信息不完整或过旧时，不应视为完整的安全评估。

### 免费额度与容量扩展

| 方案 | 证书监控容量 |
| --- | ---: |
| 新用户 | 赠送 3 个额度 |
| 扩容包 | 增加 +2、+10、+50、+100 或 +500 个额度 |

扩容采用**一次性、非消耗型内购**，无需周期性订阅。每种扩容包可购买一次，不同扩容包可以叠加。证书分析功能对所有用户开放，内购用于增加监控容量。

当前价格以 App 内显示为准，可能因 App Store 地区而异。已购买项目支持恢复。将云端监控迁移至其他设备时，使用 App 内的迁移流程，激活会转移到接收设备。

### 隐私

公网证书监控不需要服务器密码、DNS 凭据或证书私钥。


查看完整的[隐私政策](https://ssl.opshome.run/zh-cn/privacy/)。

### 监控范围

云端检测需要**公网可达的 SSL/TLS 服务及端口**。仅能通过局域网、VPN、NAS、路由器或内部基础设施访问的服务，可能无法由云端检测。

自动检测每日运行，属于证书监控，并非持续的网站可用性监控。应用不能替代证书颁发机构、服务器配置、自动续期系统或完整基础设施监控平台。

如需网站可用性、私网、Docker Probe、Synology、Proxmox、VMware、Linux 主机、容器和事件监控，可使用 [OpsHome NOC](https://app.opshome.run/)。

### 下载与支持

[在 App Store 下载](https://apps.apple.com/us/app/ssl-reminder/id6786519365) · [产品网站](https://ssl.opshome.run/zh-cn/) · [支持](https://ssl.opshome.run/zh-cn/support/)

排查问题时，请发送邮件至 [support@opshome.run](mailto:support@opshome.run)，附上 App 版本、iOS/iPadOS 版本和简短的问题描述。请勿发送私钥、密码或敏感服务器凭据。



<div align="center">

**Daily certificate checks. Clear renewal priorities.**  
**每日检查证书，清晰安排续期。**

[Website](https://ssl.opshome.run/) · [App Store](https://apps.apple.com/us/app/ssl-reminder/id6786519365) · [Privacy](https://ssl.opshome.run/privacy/) · [Support](https://ssl.opshome.run/support/)

© 2026 OpsHome™. All rights reserved.

</div>
