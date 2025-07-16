# Dockerイメージをビルド
docker build -t genzai-frontend ./frontend

# コンテナを作成（実行はしない）
docker create --name temp-container genzai-frontend

# 成果物をローカルにコピー
docker cp temp-container:/app/out ./dist

# 一時コンテナを削除
docker rm temp-container

# S3にアップロード
aws --profile <プロファイル名> s3 sync <ローカルフォルダのパス> s3://<バケット名>/<S3上のフォルダパス>