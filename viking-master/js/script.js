if ( $value != "" && $key != "project_name" && $key != "admin_email" && $key != "form_subject" ) {
    $message .= "
    " . ( ($c = !$c) ? '<tr>':'<tr style="background-color: #f8f8f8;">' ) . "
-			<td style='padding: 10px; border: #e9e9e9 1px solid;'><b>$key</b></td>
-			<td style='padding: 10px; border: #e9e9e9 1px solid;'>$value</td>
-		</tr>
-		";
+				<td style='padding: 10px; border: #e9e9e9 1px solid;'><b>$key</b></td>
+				<td style='padding: 10px; border: #e9e9e9 1px solid;'>$value</td>
+			</tr>
+			";
+		}
}
-}
} else if ( $method === 'GET' ) {

$project_name = trim($_GET["project_name"]);
@@ -30,13 +30,13 @@
if ( $value != "" && $key != "project_name" && $key != "admin_email" && $key != "form_subject" ) {
    $message .= "
    " . ( ($c = !$c) ? '<tr>':'<tr style="background-color: #f8f8f8;">' ) . "
-			<td style='padding: 10px; border: #e9e9e9 1px solid;'><b>$key</b></td>
-			<td style='padding: 10px; border: #e9e9e9 1px solid;'>$value</td>
-		</tr>
-		";
+				<td style='padding: 10px; border: #e9e9e9 1px solid;'><b>$key</b></td>
+				<td style='padding: 10px; border: #e9e9e9 1px solid;'>$value</td>
+			</tr>
+			";
+		}
}
}
-}

$message = "<table style='width: 100%;'>$message</table>";