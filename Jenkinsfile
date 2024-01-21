pipeline {
    agent any

    environment {
        AWS_REGION = 'us-east-1'
        AWS_BUCKET_NAME = 'myjenkinsbuk'
        AWS_CREDENTIALS_ID = 'myjenkinsbuk'
        ANGULAR_DIST_FOLDER = 'dist'
        NPM_CACHE = '/var/lib/jenkins/.npm'
    }

    stages {
        stage('Checkout') {
            steps {
                git branch: "main", url: 'https://github.com/Mariamatambedou/S3testBucket.git'
            }
        }

        stage('Install Angular CLI') {
            steps {
                script {
                    // Créer le répertoire du cache npm s'il n'existe pas
                    sh "mkdir -p ${NPM_CACHE}"

                    // Installer Angular CLI avec npm et spécifier le répertoire du cache
                    sh "npm install -g --cache=${NPM_CACHE} @angular/cli"
                }
            }
        }

        stage('Build') {
            steps {
                // Construire votre application Angular
                sh 'ng build --prod'
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
