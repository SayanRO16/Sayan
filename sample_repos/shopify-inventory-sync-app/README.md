# 🔄 Shopify Multi-Warehouse Inventory Sync App

A custom **Shopify App** built with **Node.js, Express, Remix, and GraphQL Admin API** that automatically synchronizes inventory levels across multiple warehouses and multi-location Shopify stores using Webhook event listeners.

[![Shopify GraphQL](https://img.shields.io/badge/Shopify-GraphQL_Admin_API-E10098?style=for-the-badge&logo=graphql&logoColor=white)](#)
[![Node.js](https://img.shields.io/badge/Node.js-Express-339933?style=for-the-badge&logo=nodedotjs&logoColor=white)](#)

---

## ⚡ Features

- **Real-Time Webhooks:** Listens to `inventory_levels/update` and `orders/create` events.
- **GraphQL Batch Updates:** Uses Shopify `inventorySetQuantities` mutation for fast bulk updates.
- **Error Resiliency:** Automatic retry logic with exponential backoff for rate limits (GraphQL Cost 1000/sec limit).
