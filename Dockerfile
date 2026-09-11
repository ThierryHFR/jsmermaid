# SPDX-License-Identifier: GPL-3.0-or-later
# Copyright (C) 2026 Mermaid Studio contributors
# Image entièrement autonome : aucune étape de build ne contacte Internet.
FROM nginx:1.29-alpine

COPY web/ /usr/share/nginx/html/
COPY nginx.conf /etc/nginx/conf.d/default.conf

EXPOSE 8080

HEALTHCHECK --interval=30s --timeout=3s --start-period=10s --retries=3 \
  CMD wget --no-verbose --tries=1 --spider http://127.0.0.1:8080/ || exit 1
