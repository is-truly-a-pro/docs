---
sidebar_position: 2
title: JSON Structure
---
# JSON Structure

This page shows the full JSON format that is used to set up subdomains under is-truly-a.pro. Each subdomain is configured through a JSON file that defines ownership information and DNS records.

## Basic Structure
The JSON file follows this high-level structure:

```json
{
    "owner": {
        // Owner identification information
    },
    "record": {
        // DNS record configurations
    },
    "proxied": true|false
}
```

## Owner Section
The `owner` section identifies who owns and manages the subdomain.

```json
"owner": {
    "username": "yourgithubusername",
    "email": ["primary@example.com", "secondary@example.com"]
}
```

| Field | Type | Description |
|-------|------|-------------|
| `username` | String | Your GitHub username - used to verify ownership and for contacting you if needed |
| `email` | Array of Strings | One or more email addresses associated with the domain. Multiple emails provide backup contact methods |

## Record Section
The `record` section defines all DNS records for your subdomain. Only include the record types you need.

```json
"record": {
    "A": ["1.1.1.1", "1.0.0.1"],
    "AAAA": ["2606:4700:4700::1111", "2606:4700:4700::1001"],
    "CNAME": "example.com",
    "MX": ["mx1.example.com", "mx2.example.com"],
    "TXT": ["example_verification=1234567890"],
    "NS": ["ns1.example.com", "ns2.example.com"],
    "SRV": [
        { "priority": 10, "weight": 60, "port": 5060, "target": "sipserver.example.com" },
        { "priority": 20, "weight": 10, "port": 5061, "target": "sipbackup.example.com" }
    ]
}
```

### A Records
IPv4 address records that point your domain to specific IP addresses.

```json
"A": ["1.1.1.1", "1.0.0.1"]
```

| Format | Description |
|--------|-------------|
| Array of IPv4 addresses | Each IPv4 address should be in standard dot notation (e.g., `"192.168.1.1"`) |

Multiple IP addresses provide redundancy - if one server is down, traffic can be directed to another.

### AAAA Records
IPv6 address records for next-generation IP addressing.

```json
"AAAA": ["2606:4700:4700::1111", "2606:4700:4700::1001"]
```

| Format | Description |
|--------|-------------|
| Array of IPv6 addresses | Each IPv6 address should be in standard IPv6 notation with colons |

### CNAME Record
Canonical Name record that points your subdomain to another domain name.

```json
"CNAME": "example.com"
```

| Format | Description |
|--------|-------------|
| String | The target domain name (without protocol) |

**Note:** CNAME records cannot coexist with certain other record types (like A records) for the same subdomain.

### MX Records
Mail Exchange records that specify mail servers for your domain.

```json
"MX": ["mx1.example.com", "mx2.example.com"]
```

| Format | Description |
|--------|-------------|
| Array of Strings | Each string represents a mail server domain name |

### TXT Records
Text records for various verification and configuration purposes.

```json
"TXT": ["example_verification=1234567890", "another_verification=abcdefg"]
```

| Format | Description |
|--------|-------------|
| Array of Strings | Each string contains text data, often used for domain verification |

### NS Records
Nameserver records that delegate DNS authority to specific nameservers.

```json
"NS": ["ns1.example.com", "ns2.example.com"]
```

| Format | Description |
|--------|-------------|
| Array of Strings | Each string is a nameserver domain name |

**Important:** NS records are only provided for users with a reasonable use case. Your PR may be closed if you request NS records without justification.

### SRV Records
Service records for specifying servers for specific services like SIP, XMPP, etc.

```json
"SRV": [
    { "priority": 10, "weight": 60, "port": 5060, "target": "sipserver.example.com" },
    { "priority": 20, "weight": 10, "port": 5061, "target": "sipbackup.example.com" }
]
```

| Field | Type | Description |
|-------|------|-------------|
| `priority` | Number | Lower values have higher priority |
| `weight` | Number | Relative weight for servers with the same priority |
| `port` | Number | TCP/UDP port where service is available |
| `target` | String | The canonical hostname of the machine providing the service |

## Proxied Field
The `proxied` field determines if the domain should be proxied through Cloudflare.

```json
"proxied": true
```

| Value | Description |
|-------|-------------|
| `true` | Traffic to your domain will be proxied through Cloudflare, providing benefits like DDoS protection, caching, and hiding your origin IP |
| `false` | Direct connection to your server (no Cloudflare proxy) |

## Complete Example

```json
{
    "owner": {
        "username": "yourgithubusername",
        "email": ["primary@example.com", "secondary@example.com"]
    },
    "record": {
        "A": ["1.1.1.1", "1.0.0.1"],
        "AAAA": ["2606:4700:4700::1111", "2606:4700:4700::1001"],
        "CNAME": "example.com",
        "MX": ["mx1.example.com", "mx2.example.com"],
        "TXT": ["example_verification=1234567890"],
        "NS": ["ns1.example.com", "ns2.example.com"],
        "SRV": [
            { "priority": 10, "weight": 60, "port": 5060, "target": "sipserver.example.com" },
            { "priority": 20, "weight": 10, "port": 5061, "target": "sipbackup.example.com" }
        ]
    },
    "proxied": false
}
```

## Important Notes

1. **Record Selection**: Only include the record types you need. The example shows all supported record types, but you should remove any that aren't necessary for your use case.

2. **NS Record Restrictions**: NS records are only granted to users with legitimate use cases. Be prepared to justify your need for NS records in your pull request.

3. **Cloudflare Proxying**: When `"proxied": true` is set, your domain will be proxied through Cloudflare, meaning:
   - Your origin server IP is hidden
   - You get DDoS protection
   - Content may be cached
   - Cloudflare's SSL is used

4. **DNS Propagation**: After your pull request is merged, DNS changes may take between 15 minutes and 24 hours to fully propagate.

5. **Filename Convention**: Your JSON file should be named according to the subdomain you want (e.g., `example.json` for `example.is-truly-a.pro`).

## Troubleshooting
If you encounter issues with your domain registration or have questions about the JSON structure, you can [open an issue](https://github.com/is-truly-a-pro/register/issues/new/choose) on the GitHub repository.