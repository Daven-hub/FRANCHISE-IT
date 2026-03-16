<?php

use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\Exception;

require 'vendor/autoload.php';


header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Methods: GET, POST, OPTIONS");
header("Access-Control-Allow-Headers: Content-Type, Authorization");
header("Content-Type: application/json");

if ($_SERVER['REQUEST_METHOD'] == 'OPTIONS') {
    http_response_code(200);
    exit();
}

if ($_SERVER['REQUEST_METHOD'] !== 'POST') {
    echo json_encode(["status" => "error", "message" => "Invalid request method"]);
    exit;
}

$data = json_decode(file_get_contents("php://input"), true);

if (!isset($data['email']) || !isset($data['name']) || !isset($data['message']) || !isset($data['subject'])) {
    echo json_encode(["status" => "error", "message" => "Missing parameters"]);
    exit;
}

$mail = new PHPMailer(true);

try {
    // Configuration du serveur SMTP
    $mail->isSMTP();
    // $mail->isMail();
    $mail->Host = 'mail.glomulser.com'; // Remplacez par votre hôte SMTP
    // $mail->Host = 'smtp.gmail.com'; // Remplacez par votre hôte SMTP
    $mail->SMTPAuth = true;
    $mail->Username = 'info@universalistrio.com';
    $mail->Password = 'Transit@2025';
    // $mail->SMTPSecure = PHPMailer::ENCRYPTION_STARTTLS;
    $mail->SMTPSecure = PHPMailer::ENCRYPTION_SMTPS;
    $mail->Port = 465;
    // $mail->Port = 587;

    $mail->CharSet = 'UTF-8';
    $mail->Encoding = 'base64';

    // Configuration de l'e-mail
    $mail->setFrom('info@universalistrio.com');
    $mail->addAddress("contact@universalistrio.com");
    if (isset($data['cc'])) {
        $mail->addCC($data['cc']);
    }
    if (isset($data['bcc'])) {
        $mail->addBCC($data['bcc']);
    }
    // if (isset($data['reply_to'])) {
    //     $mail->addReplyTo("test@ifpfranchise.com");
    // }
    $mail->addReplyTo("info@universalistrio.com");
    // Charger le template HTML
    $template = file_get_contents('email_site.html');

    // Remplacer les variables dynamiques
    $template = str_replace('{{name}}', $data['name'], $template);
    $template = str_replace('{{time}}', $data['time'], $template);
    $template = str_replace('{{message}}', $data['message'], $template);
    $template = str_replace('{{email}}', $data['email'], $template);
    $template = str_replace('{{phone}}', $data['phone'], $template);
    $template = str_replace('{{subject}}', $data['subject'], $template);
    
    $mail->isHTML(true);
    $mail->Subject = $data['subject'];
    $mail->Body    = $template;
    $mail->AltBody = "";

    // Envoi de l'e-mail
    $mail->send();
    echo json_encode(["status" => "success", "message" => "Email sent successfully{$mail->ErrorInfo}"]);
} catch (Exception $e) {
    echo json_encode(["status" => "error", "message" => "{$e} :Email could not be sent. Mailer Error: {$mail->ErrorInfo}"]);
}