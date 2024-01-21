pipeline {
    agent any

    environment {
        AWS_REGION = 'us-east-1'
        AWS_BUCKET_NAME = 'myjenkinsbuk'
        AWS_CREDENTIALS_ID = 'myjenkinsbuk'
        ANGULAR_DIST_FOLDER = 'dist'
        
    }

    stages {
        stage('Checkout') {
            steps {
                git branch: "main", url: 'https://github.com/Mariamatambedou/S3testBucket.git'
            }
        }

        stage('Build') {
            steps {
                script {
                    sh 'npm install'
                    sh 'ng build --prod'
                }
            }
        }

        stage('Deploy to S3') {
            steps {
                script {
                    withAWS(region: AWS_REGION, credentials: AWS_CREDENTIALS_ID) {
                        // Copier les fichiers dans le répertoire de distribution vers S3
                        s3Upload(bucket: AWS_BUCKET_NAME, workingDir: ANGULAR_DIST_FOLDER, includePathPattern: '**/*')
                    }
                }
            }
        }
    }
}
