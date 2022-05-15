
 server {
            listen 80;
            listen [::]:80;

        root /var/www/test_task_logru.178.20.42.150.sslip.io/html;
        index index.html index.htm index.nginx-debian.html;

        server_name test_task_logru.178.20.42.150.sslip.io www.test_task_logru.178.20.42.150.sslip.io;

        location / {
                # try_files $uri $uri/ =404;
                client_max_body_size 100m;
                client_body_timeout 600s;
                client_body_in_file_only clean;
                client_body_buffer_size 16K;
                }
        }       